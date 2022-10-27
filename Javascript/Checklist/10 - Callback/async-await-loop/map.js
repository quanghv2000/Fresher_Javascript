const arr = [1, 2, 3, 4, 5];

async function promises() {
  const unresolved = arr.map(async (item) => {
    await setTimeout(() => {
    }, 1000 * item);
    console.log("---> ", item)
    return item;
  });

  const resolved = await Promise.all(unresolved);

  console.log(resolved);
}

promises();
