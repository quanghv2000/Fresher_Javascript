import { Router, Response, Request } from "express";
import { QuizService } from "../../services/quiz.service";
import { DataResponse } from "../data-response/data-response";
import { QuizDTO } from "../../services/dtos/quiz.dto";
import { checkJwt } from "../../middlewares/checkJwt";
import { checkRole } from "../../middlewares/checkRole";
import { UserDTO } from "../../services/dtos/user.dto";
import { QuizSummaryService } from "../../services/quiz-summary.service";
import { QuestionSummaryService } from "../../services/question-summary.service";
import { AnswerSummaryService } from "../../services/answer-summary.service";
import { QuestionDTO } from "../../services/dtos/question.dto";
import { AnswerDTO } from "../../services/dtos/answer.dto";
import { ToDoQuizService } from "../../services/to-do-quiz/to-do-quiz.service";
import { AnswerSummaryDTO } from "../../services/dtos/answer-summary.dto";
import { isNumber } from "../../utils/validation/is-number.util";
import { QuizSummaryDTO } from "../../services/dtos/quiz-summary.dto";
import { QuestionSummaryDTO } from "../../services/dtos/question-summary.dto";

export class ToDoQuizController {
  public readonly router: Router;
  private readonly quizService: QuizService;
  private readonly quizSummaryService: QuizSummaryService;
  private readonly questionSummaryService: QuestionSummaryService;
  private readonly answerSummaryService: AnswerSummaryService;
  private readonly toDoQuizService: ToDoQuizService;

  constructor() {
    // Create a new instance of QuizController
    this.quizService = new QuizService();
    this.quizSummaryService = new QuizSummaryService();
    this.questionSummaryService = new QuestionSummaryService();
    this.answerSummaryService = new AnswerSummaryService();
    this.toDoQuizService = new ToDoQuizService();
    this.router = Router();
    this.routes();
  }

  public createSampleData = async (
    req: Request,
    res: Response
  ): Promise<QuizDTO[] | any> => {
    let dataResponse = new DataResponse(null, 201, "Successfully Created");
    try {
      const userReqDTO: UserDTO = res?.locals?.userReq;
      const quizSampleData: any = req.body;
      const sampleDataCreated = await this.toDoQuizService.createSampleData(
        quizSampleData,
        userReqDTO
      );

      if (!sampleDataCreated) {
        dataResponse.statusCode = 400;
        dataResponse.message = "Bad request";
        return res.status(dataResponse.statusCode).send(dataResponse);
      }

      dataResponse.result = sampleDataCreated;
      return res.status(dataResponse.statusCode).send(dataResponse);
    } catch (error) {
      console.log(error);
      dataResponse.statusCode = 500;
      dataResponse.message = "Internal server error";

      return res.status(dataResponse.statusCode).send(dataResponse);
    }
  };

  public startQuiz = async (
    req: Request,
    res: Response
  ): Promise<QuizDTO[] | any> => {
    let dataResponse = new DataResponse(null, 200, "Successfully");
    try {
      const userReqDTO: UserDTO = res?.locals?.userReq;
      const quizDTO: QuizDTO = req.body;

      // l???y th??ng tin quizToDo
      const quizToDoFound = await this.quizService.getQuizToDo(
        Number(quizDTO.id)
      );
      // N???u quiz kh??ng ???????c t??m th???y => B??o l???i Quiz not found
      if (!quizToDoFound) {
        dataResponse.statusCode = 400;
        dataResponse.message = "Quiz not found";
        return res.status(dataResponse.statusCode).send(dataResponse);
      }

      // N???u quiz t???n t???i
      // => T??m quiz summary inprogress trong b???ng quiz summary theo userId v?? quizId
      const quizSummaryInprogress =
        await this.quizSummaryService.findQuizSummaryInprogressByUserAndQuiz(
          userReqDTO.id,
          quizDTO.id
        );

      // N???u c?? quiz ??ang trong tr???ng th??i inprogress => return v??? th??ng tin b??i quiz ????
      if (quizSummaryInprogress) {
        console.log("Ti???p t???c l??m quiz!");
        dataResponse.result = quizSummaryInprogress;
        return res.status(dataResponse.statusCode).send(dataResponse);
      }

      console.log("T???o Quiz Summary m???i!");

      // N???u ko c?? quiz n??o ??ang inprogess => t???c l?? quiz ???? ch??a ???????c l??m ho???c ???? ho??n th??nh tr?????c ????
      // => T???o quiz summary m???i v???i tr???ng th??i l?? inprogress v?? return v?? th??ng tin quiz summary v???a m???i t???o
      const quizSummaryIdCreated =
        await this.quizSummaryService.createNewQuizToDoSummary(
          quizToDoFound,
          userReqDTO
        );

      // n???u t???o th??nh c??ng quiz summary (nh???n ??c id ???? t???o)
      if (quizSummaryIdCreated) {
        const quizTodo = await this.quizSummaryService.getQuizSummaryById(
          quizSummaryIdCreated
        );
        (dataResponse.statusCode = 200),
          (dataResponse.message = "Successfully");
        dataResponse.result = quizTodo;
      } else {
        dataResponse.statusCode = 500;
        dataResponse.message = "Internal server error";

        return res.status(dataResponse.statusCode).send(dataResponse);
      }

      return res.status(dataResponse.statusCode).send(dataResponse);
    } catch (error) {
      console.log(error);
      dataResponse.statusCode = 500;
      dataResponse.message = "Internal server error";

      return res.status(dataResponse.statusCode).send(dataResponse);
    }
  };

  public getAnswersToDo = async (
    req: Request,
    res: Response
  ): Promise<AnswerSummaryDTO[] | any> => {
    let dataResponse = new DataResponse(null, 200, "Successfully");
    try {
      const userReqDTO: UserDTO = res?.locals?.userReq;

      if (!isNumber(req.params.questionSummaryId)) {
        dataResponse.statusCode = 400;
        dataResponse.message =
          "Invalid Question Summary ID! Question Summary ID Must be a number";
        return res.status(dataResponse.statusCode).send(dataResponse);
      }

      const answersToDo = await this.answerSummaryService.getAnswersToDo(
        Number(req.params.questionSummaryId),
        Number(userReqDTO.id)
      );

      if (!answersToDo || answersToDo.length === 0) {
        dataResponse.statusCode = 400;
        dataResponse.message = "Answers not found";
        return res.status(dataResponse.statusCode).send(dataResponse);
      }

      dataResponse.result = answersToDo;
      return res.status(dataResponse.statusCode).send(dataResponse);
    } catch (error) {
      console.log(error);
      dataResponse.statusCode = 500;
      dataResponse.message = "Internal server error";

      return res.status(dataResponse.statusCode).send(dataResponse);
    }
  };

  public getQuizSummaryByQuizAndUser = async (
    req: Request,
    res: Response
  ): Promise<QuizSummaryDTO[] | any> => {
    let dataResponse = new DataResponse(null, 200, "Successfully");
    try {
      const userReqDTO: UserDTO = res?.locals?.userReq;

      if (!isNumber(req.params.quizId)) {
        dataResponse.statusCode = 400;
        dataResponse.message = "Invalid Quiz ID! Quiz ID Must be a number";
        return res.status(dataResponse.statusCode).send(dataResponse);
      }

      const quizsSummaryFoundByQuizAndUser =
        await this.quizSummaryService.getQuizSummaryByQuizAndUser(
          Number(req.params.quizId),
          Number(userReqDTO.id)
        );

      if (
        !quizsSummaryFoundByQuizAndUser ||
        quizsSummaryFoundByQuizAndUser.length === 0
      ) {
        dataResponse.statusCode = 400;
        dataResponse.message = "Quiz Summary not found";
        return res.status(dataResponse.statusCode).send(dataResponse);
      }

      dataResponse.result = quizsSummaryFoundByQuizAndUser;
      return res.status(dataResponse.statusCode).send(dataResponse);
    } catch (error) {
      console.log(error);
      dataResponse.statusCode = 500;
      dataResponse.message = "Internal server error";

      return res.status(dataResponse.statusCode).send(dataResponse);
    }
  };

  public saveAnswer = async (req: Request, res: Response): Promise<any> => {
    let dataResponse = new DataResponse(null, 200, "Successfully saved answer");
    try {
      const questionSummaryDTO: QuestionSummaryDTO = req.body;
      const answersSummary: any = questionSummaryDTO.answersSummary?.map(
        (answerSummary) => {
          return { id: answerSummary.id, isSelected: answerSummary.isSelected };
        }
      );

      const isAnswerChanged = answersSummary.some(
        (answer: AnswerSummaryDTO) => {
          return answer.isSelected;
        }
      );

      if (!isAnswerChanged) {
        dataResponse.message = "NOT_YET_ANSWERED";
        return res.status(dataResponse.statusCode).send(dataResponse);
      }

      questionSummaryDTO.status = "ANSWER_SAVED";
      const quizSummarySaved = await this.questionSummaryService.saveAnswer(
        questionSummaryDTO,
        answersSummary
      );

      dataResponse.result = quizSummarySaved;
      return res.status(dataResponse.statusCode).send(dataResponse);
    } catch (error) {
      console.log(error);
      dataResponse.statusCode = 500;
      dataResponse.message = "Internal server error";

      return res.status(dataResponse.statusCode).send(dataResponse);
    }
  };

  public submitQuiz = async (req: Request, res: Response) => {
    let dataResponse = new DataResponse(null, 200, "Successfully submited");
    try {
      let marks = 0;
      let grade = 0;
      // quiz submitted
      const quizSummaryDTO: QuizSummaryDTO = req.body;

      // check quiz summary exist
      // const quizSummaryFoundToSubmitted =
      //   await this.quizSummaryService.getQuizSummaryByIdAndStatus(
      //     quizSummaryDTO
      //   );
      // if (!quizSummaryFoundToSubmitted) {
      //   dataResponse.statusCode = 400;
      //   dataResponse.message = "Quiz Submited not found";
      //   return res.status(dataResponse.statusCode).send(dataResponse);
      // }

      // ?????m s??? l?????ng c??u h???i trong quiz => ????? chia ??i???m cho m???i c??u tr??? l???i ????ng
      const numberOfQuestion =
        await this.questionSummaryService.countQuestionByQuiz(quizSummaryDTO);

      // ?????m s??? l?????ng c??u tr??? l???i ????ng c???a nh???ng c??u h???i "Is Not Mutiple" - (isMutiple = false)
      const numberOfAnswerCorrectWithIsMutipleFalse =
        await this.answerSummaryService.getNumberOfAnswerCorrectWithIsMutipleFalse(
          quizSummaryDTO
        );

      // L???y ra danh s??ch nh???ng c??u h???i "Is Mutile" - (isMutiple = true) (k??m theo nh???ng c??u tr??? l???i ????ng "relations_answer" - isCorrect = true )
      const questionsSummaryIsMutipleTrue =
        await this.questionSummaryService.getQuestionsSummaryIsMutipleTrue(
          quizSummaryDTO
        );

      // S??? l?????ng c??u tr??? l???i ????ng c???a nh???ng c??u h???i isMutiple = true
      let numberOfAnswerCorrectWithIsMutipleTrue = 0;

      // Duy???t qua t???t c??? nh???ng c??u h???i isMutiple = true l???y ra ??c 
      questionsSummaryIsMutipleTrue.forEach((question: QuestionSummaryDTO) => {
        // Every => n???u t???t c??? answer c???a question m?? c?? isCorrect = isSelected => is correct answer
        let isCorrectAnswers = 
        question.answersSummary?.every((answer) => {
          return answer.isCorrect === answer.isSelected;
        })

        // N???u c??u tr??? l???i ????ng => + d???n s??? l?????ng c??u tr??? l???i ????ng; 
        if (isCorrectAnswers) {
          numberOfAnswerCorrectWithIsMutipleTrue += 1;
        }

      });

      // marks: S??? l?????ng c??u tr??? l???i ????ng (c???a 2 d???ng question: isMutiple = true or false)
      marks =
        numberOfAnswerCorrectWithIsMutipleFalse +
        numberOfAnswerCorrectWithIsMutipleTrue;
      // grade: ??i???m / 10 = marks * (s??? ??i???m / 1 c??u h???i). s??? ??i???m / 1 c??u h???i = 10 / numberOfQuestion - (t???ng s??? l?????ng c??u h???i)
      grade = marks * (10 / numberOfQuestion);

      // L??u marks v?? grade
      const quizSummaryDTOToSubmitted: QuizSummaryDTO = {
        id: quizSummaryDTO.id,
        status: "SUBMITTED",
        marks: marks,
        grade: grade,
      }
      
      // Update marks v?? grade trong db
      const quizSummarySubmitted = await this.quizSummaryService.update(quizSummaryDTOToSubmitted);

      dataResponse.result = quizSummarySubmitted;
      return res.status(dataResponse.statusCode).send({
        dataResponse,
      });
    } catch (error) {
      console.log(error);
      dataResponse.statusCode = 500;
      dataResponse.message = "Internal server error";

      return res.status(dataResponse.statusCode).send(dataResponse);
    }
  };

  /**
   * Configure the routes of controller
   */
  public routes() {
    this.router.post(
      "/create-sample-data",
      [checkJwt, checkRole(["ROLE_ADMIN", "ROLE_USER"])],
      this.createSampleData
    );
    this.router.post(
      "/start-quiz",
      [checkJwt, checkRole(["ROLE_ADMIN", "ROLE_USER"])],
      this.startQuiz
    );
    this.router.get(
      "/get-answers-to-do/:questionSummaryId",
      [checkJwt, checkRole(["ROLE_ADMIN", "ROLE_USER"])],
      this.getAnswersToDo
    );
    this.router.get(
      "/get-quiz-summary-by-quiz-and-user/:quizId",
      [checkJwt, checkRole(["ROLE_ADMIN", "ROLE_USER"])],
      this.getQuizSummaryByQuizAndUser
    );
    this.router.put(
      "/save-answer",
      [checkJwt, checkRole(["ROLE_ADMIN", "ROLE_USER"])],
      this.saveAnswer
    );
    this.router.post(
      "/submit-quiz",
      [checkJwt, checkRole(["ROLE_ADMIN", "ROLE_USER"])],
      this.submitQuiz
    );
  }
}
