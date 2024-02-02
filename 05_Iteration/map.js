const myObject = {
  js: 'javascript',
  cp: 'competitive programming',
  Go: "language by Google"
}

for (const key in myObject) {
  // console.log(`${key} shortcut for ${myObject[key]}`);
}


// const coding = ["JS", "ruby", "Go", "python"]

// coding.forEach( function(item){
//     console.log(item);
// })

const coding = ["JS", "ruby", "Go", "python"]

coding.forEach((item) =>{
    // console.log(item);
})


const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: "js"
    },
    {
        languageName: 'Python',
        languageFileName: "Py"
    },
    {
        languageName: 'Go',
        languageFileName: "GO"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})


// Map.filter

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//     return num < 6;
// } )

// console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//  const userBooks= books.filter( (bk) => bk.genre === 'Fiction' )

//   console.log(userBooks);



  const userBooks= books.filter( (bk) => bk.genre === 'Science' )

  console.log(userBooks);