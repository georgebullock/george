#!/usr/bin/env node

const packageJSON = require("./package.json");
const chalk = require("chalk");
const log = console.log;

// Colors
const white = chalk.white;
const cblue = chalk.hex(`#4f5d75`);

// Styles
const bold = chalk.bold;

log(
  `
${cblue.bgWhite.bold.inverse(` Welcome to georgebullock `)} v${
    packageJSON.version
  }. Thanks for installing me!
  `,

  chalk.dim(`
Hey 👋🏾, I'm George, a product manager in Berlin, Germany

I'm a business professional with strong information technology skills.

I have over 10 years of experience working for media and technology companies. I started my career in finance and business development. Post-Grad, I switched to marketing and did growth-oriented marketing for startups. My focuses were user acquisition and conversion optimization.

The technical side of marketing inspired me to study design and web development. In mid-2015, I
started teaching myself UX design, UI Design, HTML, CSS, and JavaScript after work. A few months
later, I decided to become a frontend developer.

To speed up my transition, I took a sabbatical for most of 2016 to study design and web technology
full-time. Besides teaching myself, I completed a full-time web development boot camp. In October, I
started applying for frontend development jobs. A month later I landed my first frontend job at IBM iX.

After ~5 years in frontend engineering, I made a lateral move into product management to focus my energy on aligning people and driving business outcomes.

Currently, I'm a product manager at Staffbase, which is a leading communications platform for businesses. My group is building Staffbase's external communications solution. Specifically, my team is responsible for the social media component of the overall external communications offer. 

I earned an MBA from EDHEC Business School in France. I also hold a B.S. in Business Administration, with an emphasis on finance, from California State University, Los Angeles. And I'm a Project
Management Institute Agile Certified Practitioner (PMI - ACP) certificate holder.

`)
);

log(
  `${cblue.bgWhite.bold.inverse(` More about me `)}`,
  chalk.dim(`

🤝 - I work full-time for Staffbase: https://staffbase.com/en/.

🛠️ - I know HTML, CSS, JavaScript, React, TypeScript, and basic SQL.

🔭 - I'm shopping around for a new programming side project 🤓.

🌱 - I’m learning more React, more TypeScript, algorithmic layout, CSS Grid, fundamental data structures and algorithms.

🛣️  - My technical learning roadmap includes a full-stack JavaScript framework (e.g. Blitz, Remix, Sails), full-stack application architecture, AWS via Serverless Framework, PostgreSQL, web animation, data visualization (via D3), and a few GoF design patterns.

📝 - In 2020, I published Level Up and Launch: https://medium.com/level-up-and-launch, a limited series of articles about my experience leveling up my technical skills full-time to get my first React job.

✍🏾 - I created a blog named Diaminding: https://www.diaminding.com/about/, but I haven't started publishing yet.

🌐 - My personal website is georgebullock.dev: https://www.georgebullock.dev/.

📫 - You can follow me On Twitter @george_bullock: https://twitter.com/george_bullock.

`)
);

log(
  `${cblue.bgWhite.bold.inverse(` Other Fun facts `)}`,
  chalk.dim(`

- I'm an occasional Unsplash contributor. Check out my photos here: https://unsplash.com/@george_bullock 📷.

- I briefly worked in theatrical marketing for Lionsgate: https://www.lionsgate.com/. I met a handful of celebs and literally got paid to watch movies 🎬.

- Before moving to Germany 🇩🇪  I lived in France 🇫🇷  and Mexico 🇲🇽  for one year each. But, I don't speak French or Spanish 🤷🏾‍♂️.

- I love Deep House 🎛️, Synthwave 🦄, 90s Hip Hop 🎤, crime dramas 🔫 (especially Heat and Collateral), sci-fi 🛸, BBQ 🍖, and Asian food 🥡.

- My favorite restaurant: It's a tie between Doyum Restaurant: http://www.doyum-restaurant.de/ 🇹🇷 and  Good Friends: https://www.goodfriends-berlin.de/ 🇨🇳.

- My favorite baked good: Oatmeal raisin cookies 🍪.

- Pineapple on pizza? Nope 🙅🏾‍♂️.

- My coffee order: Americano with a bit of whole milk 🐮.

- I mastered the art of making American-style pancakes from scratch 🥞.`)
);
