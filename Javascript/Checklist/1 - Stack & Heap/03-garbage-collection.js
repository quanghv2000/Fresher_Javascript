/*  
    Memory Life Cycle: Allocate => Use => Release
    - Garbage collection: Releasing memory: Delete these values do not use
    - scavenge và mark-sweep/mark-compact algorithm
*/

/*
    Once the JavaScript engine recognizes that a given variable or function is not needed anymore, 
    it releases the memory it occupied.

    1. Bước đánh dấu: thuật toán sẽ duyệt qua tất cả các giá trị có trong khu vực bộ nhớ mà nó quản lý,
    bước duyệt này đơn giản chỉ là depth-first search, tìm gặp và đánh dấu.
    
    2. Bước xử lý: sau quá trình duyệt, tất cả những giá trị chưa được đánh dấu, sẽ bị coi là đã "chết", 
    và sẽ bị xóa bỏ, trả lại bộ nhớ trống (sweep), hoặc gom góp lại để lấy lại các khoảng trống trong bộ nhớ không sử dụng được (compact).
*/
