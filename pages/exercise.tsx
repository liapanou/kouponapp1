import { useState } from "react";

const lista = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
function Button(props: any) {
  return <button onClick={() => alert(props.name)}>{props.children}</button>;
}

function Comp(props: any) {
  return (
    <ul>
      {props.yyy.map((str) => (
        <li>{str}</li>
      ))}

      {props.num}
    </ul>
  );
}

export default function Exercise() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Button name="mpampis">btn1</Button>
      <Button name="asdas">btn2</Button>
      <Button name="asdasd">btn3</Button>

      <button onClick={() => setCount(count + 1)} className="btn">
        Click me
      </button>
      <div>Button has been clicked {count} times</div>

      <Comp yyy={[1, 2, 3, 4, 5]} num={0} />
      <br />
      <Comp yyy={[5, 6, 7, 8, 9]} num={20} />
    </>
  );
}

const arr = [
  {
    id: 1,
    first_name: "Sigismundo",
    last_name: "Water",
    email: "swater0@reddit.com",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 78,
  },
  {
    id: 2,
    first_name: "Melba",
    last_name: "Jewer",
    email: "mjewer1@google.co.uk",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 38,
  },
  {
    id: 3,
    first_name: "Gram",
    last_name: "Bode",
    email: "gbode2@answers.com",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 91,
  },
  {
    id: 4,
    first_name: "Edgar",
    last_name: "Truscott",
    email: "etruscott3@wufoo.com",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 47,
  },
  {
    id: 5,
    first_name: "Cort",
    last_name: "Brimham",
    email: "cbrimham4@cnn.com",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 49,
  },
  {
    id: 6,
    first_name: "Herc",
    last_name: "Coale",
    email: "hcoale5@latimes.com",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 90,
  },
  {
    id: 7,
    first_name: "Rhodia",
    last_name: "Murford",
    email: "rmurford6@yellowbook.com",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 51,
  },
  {
    id: 8,
    first_name: "Gayle",
    last_name: "Easey",
    email: "geasey7@nytimes.com",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 19,
  },
  {
    id: 9,
    first_name: "Normy",
    last_name: "Anderson",
    email: "nanderson8@yolasite.com",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 2,
  },
  {
    id: 10,
    first_name: "Jeanna",
    last_name: "Wilderspoon",
    email: "jwilderspoon9@bbb.org",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 66,
  },
  {
    id: 11,
    first_name: "Rudolf",
    last_name: "Poetz",
    email: "rpoetza@cisco.com",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 83,
  },
  {
    id: 12,
    first_name: "Nico",
    last_name: "Ballefant",
    email: "nballefantb@washington.edu",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 68,
  },
  {
    id: 13,
    first_name: "Carney",
    last_name: "Pretsell",
    email: "cpretsellc@irs.gov",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 72,
  },
  {
    id: 14,
    first_name: "Carlynne",
    last_name: "Fetter",
    email: "cfetterd@ca.gov",
    hide: Math.random() < 0.5,
    gender: "Bigender",
    grade: 94,
  },
  {
    id: 15,
    first_name: "Rivkah",
    last_name: "Eunson",
    email: "reunsone@oakley.com",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 60,
  },
  {
    id: 16,
    first_name: "Marguerite",
    last_name: "Jermyn",
    email: "mjermynf@umich.edu",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 46,
  },
  {
    id: 17,
    first_name: "Rici",
    last_name: "Allcroft",
    email: "rallcroftg@auda.org.au",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 68,
  },
  {
    id: 18,
    first_name: "Parke",
    last_name: "Persian",
    email: "ppersianh@yolasite.com",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 66,
  },
  {
    id: 19,
    first_name: "Enriqueta",
    last_name: "Noakes",
    email: "enoakesi@prnewswire.com",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 27,
  },
  {
    id: 20,
    first_name: "Wilbur",
    last_name: "Jiroutka",
    email: "wjiroutkaj@answers.com",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 28,
  },
  {
    id: 21,
    first_name: "Nan",
    last_name: "Olohan",
    email: "nolohank@newsvine.com",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 93,
  },
  {
    id: 22,
    first_name: "Arabela",
    last_name: "Filler",
    email: "afillerl@cafepress.com",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 73,
  },
  {
    id: 23,
    first_name: "Arlana",
    last_name: "Billing",
    email: "abillingm@spotify.com",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 26,
  },
  {
    id: 24,
    first_name: "Wallie",
    last_name: "Shoebottom",
    email: "wshoebottomn@ask.com",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 7,
  },
  {
    id: 25,
    first_name: "Hobey",
    last_name: "Sargeant",
    email: "hsargeanto@de.vu",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 67,
  },
  {
    id: 26,
    first_name: "Eyde",
    last_name: "Key",
    email: "ekeyp@bigcartel.com",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 21,
  },
  {
    id: 27,
    first_name: "Alford",
    last_name: "Webland",
    email: "aweblandq@uiuc.edu",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 64,
  },
  {
    id: 28,
    first_name: "Maurits",
    last_name: "Spraggs",
    email: "mspraggsr@ed.gov",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 100,
  },
  {
    id: 29,
    first_name: "Gilberto",
    last_name: "Fairlam",
    email: "gfairlams@rambler.ru",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 79,
  },
  {
    id: 30,
    first_name: "Faydra",
    last_name: "Meese",
    email: "fmeeset@pbs.org",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 93,
  },
  {
    id: 31,
    first_name: "Locke",
    last_name: "Stendall",
    email: "lstendallu@taobao.com",
    hide: Math.random() < 0.5,
    gender: "Polygender",
    grade: 69,
  },
  {
    id: 32,
    first_name: "Smitty",
    last_name: "De Bruijn",
    email: "sdebruijnv@mapy.cz",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 9,
  },
  {
    id: 33,
    first_name: "Morna",
    last_name: "Clemas",
    email: "mclemasw@arstechnica.com",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 8,
  },
  {
    id: 34,
    first_name: "Drud",
    last_name: "Sulter",
    email: "dsulterx@craigslist.org",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 95,
  },
  {
    id: 35,
    first_name: "Shadow",
    last_name: "Penke",
    email: "spenkey@booking.com",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 39,
  },
  {
    id: 36,
    first_name: "Penn",
    last_name: "Pickle",
    email: "ppicklez@tripod.com",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 26,
  },
  {
    id: 37,
    first_name: "Cher",
    last_name: "Whopples",
    email: "cwhopples10@e-recht24.de",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 35,
  },
  {
    id: 38,
    first_name: "Chrissy",
    last_name: "Wetherald",
    email: "cwetherald11@de.vu",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 56,
  },
  {
    id: 39,
    first_name: "Florry",
    last_name: "Fury",
    email: "ffury12@ucoz.ru",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 12,
  },
  {
    id: 40,
    first_name: "Haroun",
    last_name: "Wilfling",
    email: "hwilfling13@pcworld.com",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 74,
  },
  {
    id: 41,
    first_name: "Seka",
    last_name: "Reary",
    email: "sreary14@narod.ru",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 76,
  },
  {
    id: 42,
    first_name: "Karen",
    last_name: "Jochens",
    email: "kjochens15@wiley.com",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 41,
  },
  {
    id: 43,
    first_name: "Coralie",
    last_name: "Iffe",
    email: "ciffe16@google.co.jp",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 28,
  },
  {
    id: 44,
    first_name: "Stanislas",
    last_name: "Hilldrop",
    email: "shilldrop17@google.co.jp",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 11,
  },
  {
    id: 45,
    first_name: "Hirsch",
    last_name: "Tomek",
    email: "htomek18@ezinearticles.com",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 54,
  },
  {
    id: 46,
    first_name: "Angeline",
    last_name: "Szanto",
    email: "aszanto19@bloglines.com",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 48,
  },
  {
    id: 47,
    first_name: "Had",
    last_name: "Doornbos",
    email: "hdoornbos1a@jimdo.com",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 99,
  },
  {
    id: 48,
    first_name: "Terri",
    last_name: "Burroughes",
    email: "tburroughes1b@oracle.com",
    hide: Math.random() < 0.5,
    gender: "Male",
    grade: 88,
  },
  {
    id: 49,
    first_name: "Cyndi",
    last_name: "Leil",
    email: "cleil1c@xinhuanet.com",
    hide: Math.random() < 0.5,
    gender: "Female",
    grade: 60,
  },
  {
    id: 50,
    first_name: "Keene",
    last_name: "Blamey",
    email: "kblamey1d@lycos.com",
    hide: Math.random() < 0.5,
    gender: "Genderfluid",
    grade: 20,
  },
];

const names = arr.map((obj) => {
  return { first_name: obj.first_name };
});

function ab(ee: any[]) {
  return ee.map((obj) => {
    return { first_name: obj.first_name };
  });
}

function lia(arr: any[]) {
  return arr.filter((obj) => obj.grade > 20);
}

function dd(arr: any[]) {
  return arr.map((obj) => {
    return obj.first_name;
  });
}

function ad(arr: any[]) {
  return arr.map((obj) => {
    return { first_name: obj.first_name, last_name: obj.last_name };
  });
}

function ag(arr: any[]) {
  return arr.map((obj) => {
    return { ...obj, grade: obj.grade * 2 };
  });
}

function hide(arr: any[]) {
  return arr.filter((obj) => obj.hide === false);
}

function sum(arr: any[]) {
  let counter = 0;
  arr.forEach((obj) => {
    counter = counter + obj.grade;
  });

  return counter;
}

function getId(arr: any[]) {
  return arr.map((obj) => {
    return { id: obj.id };
  });
}

function getFirst_name(arr: any[]) {
  return arr.map((obj) => {
    return { first_name: obj.first_name };
  });
}

function getLast_name(arr: any[]) {
  return arr.map((obj) => {
    return { last_name: obj.last_name };
  });
}

function getEmail(arr: any[]) {
  return arr.map((obj) => {
    return { email: obj.email };
  });
}

function getHide(arr: any[]) {
  return arr.map((obj) => {
    return { hide: obj.hide };
  });
}

function getGender(arr: any[]) {
  return arr.map((obj) => {
    return { gender: obj.gender };
  });
}

function getGrade(arr: any[]) {
  return arr.map((obj) => {
    return { grade: obj.grade };
  });
}

function getIdAndFirst_name(arr: any[]) {
  return arr.map((obj) => {
    return { id: obj.id, first_name: obj.first_name };
  });
}

function getIdAndLast_name(arr: any[]) {
  return arr.map((obj) => {
    return { id: obj.id, last_name: obj.last_name };
  });
}

function getIdAndEmail(arr: any[]) {
  return arr.map((obj) => {
    return { id: obj.id, email: obj.email };
  });
}

function getIdAndHide(arr: any[]) {
  return arr.map((obj) => {
    return { id: obj.id, hide: obj.hide };
  });
}

function getIdAndGender(arr: any[]) {
  return arr.map((obj) => {
    return { id: obj.id, gender: obj.gender };
  });
}

function getIdAndGrade(arr: any[]) {
  return arr.map((obj) => {
    return { id: obj.id, grade: obj.grade };
  });
}

function getGradeResults(arr: any[]) {
  return arr
    .map((obj) => {
      return { ...obj, grade: obj.grade ^ 2 };
    })
    .filter((obj) => {
      return obj.grade > 20;
    });
}
console.log(getGradeResults(arr));
