function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const walk = true;

      if (walk === true) {
        resolve("You walk the dog 🦮");
      } else {
        reject("You didn't walk the dog 🦮");
      }
    }, 2000);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const clean = false;

      if (clean === true) {
        resolve("You clean the kitchen 🧹");
      } else {
        reject("You didn't clean the kitchen 🧹");
      }
    }, 1500);
  });
}
function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trash = true;

      if (trash === true) {
        resolve("You take out the trash 🗑");
      } else {
        reject("You didn't take out the trash 🗑");
      }
    }, 1000);
  });
}

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores");
  } catch (error) {
    console.error(error);
  }
}

doChores();

// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTrash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("You finished all the chores");
//   })
//   .catch((error) => console.error(error));
