function loadData() {
  return new Promise(function (resolve, reject) {
    // TODO: extract contactInfo from summaries and create new table so that
    // data is anonymous and can be included on github
    var RAW_DATA = [
      {
        timestamp: "11/29/2020 18:50:14",
        companyName: "Microsoft",
        jobType: "Internship",
        positionName: "Software Engineering Intern",
        location: "Redmond, Washington",
        remote: "Yes",
        overallRating: 5,
        detailsText:
          "I was assigned an awesome mentor, worked on a small team, learned a ton and felt valued and appreciated. I really like the company values and felt it was overall a great fit.",
        duration: "2 - 3 months",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "11/29/2020 20:16:29",
        companyName: "Google",
        jobType: "Internship",
        positionName: "Test Engineering Intern",
        location: "Sunnyvale, California",
        remote: "No",
        overallRating: 5,
        detailsText:
          "Had a supportive manager that helped me professionally and personally. Lots of opportunity to learn new things. The people I met were all nice and like-minded",
        duration: "2 - 3 months",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "11/29/2020 20:17:46",
        companyName: "Microsoft",
        jobType: "Internship",
        positionName: "Software Engineering Intern",
        location: "Redmond, Washington",
        remote: "Yes",
        overallRating: 5,
        detailsText:
          "Had a good team that was helpful and fun to play games with. Definitely made the best out of the virtual experience. I was also close with my manager and dev buddy",
        duration: "2 - 3 months",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "11/29/2020 20:55:36",
        companyName: "Intuit",
        jobType: "Internship",
        positionName: "Software Engineer Intern",
        location: "San Diego, CA",
        remote: "Yes",
        overallRating: 3,
        detailsText:
          "I didn't have a great experience, but I think that might've just been team dependent. (I did have an amazing mentor though) Most of the other interns at Intuit had nothing but positive things to say about their experience. I think the internship program as a whole was administered very well, especially in a virtual environment. There were plenty of opportunities to meet and have fun with other interns, and Intuit showed their appreciation for us throughout the internship which was really nice.",
        duration: "2 - 3 months",
        learningGrowthRating: 4,
        recRating: 4,
      },
      {
        timestamp: "11/30/2020 14:15:17",
        companyName: "Sysdig",
        jobType: "Internship",
        positionName: "Software Engineering Intern",
        location: "San Francisco, CA",
        remote: "Yes",
        overallRating: 5,
        detailsText:
          "They were extremely well-organized, and around to help the interns whenever we needed them.",
        duration: "2 - 3 months",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "11/30/2020 14:21:35",
        companyName: "Microsoft",
        jobType: "Internship",
        positionName: "Software Engineering Intern",
        location: "Redmond, WA",
        remote: "Yes",
        overallRating: 5,
        detailsText: "",
        duration: "4 - 6 months",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "11/30/2020 15:15:28",
        companyName: "The Coder School",
        jobType: "Part-time",
        positionName: "Code Coach (Basically a tutor)",
        location: "Berkeley, CA",
        remote: "Yes",
        overallRating: 5,
        detailsText:
          "The owners/my bosses are extremely nice, welcoming, and generous. Everyone I've worked with to teach camps or classes has been very dedicated and enjoys teaching kids. The hours are very flexible, you get paid for staff socials as well as prep time. The overall atmosphere of this Coder School is very positive and nurturing towards its students and staff.",
        duration: "4 - 6 months",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "11/30/2020 15:57:47",
        companyName: "Codazen",
        jobType: "Internship",
        positionName: "User Experience Designer",
        location: "Laguna Hills, CA",
        remote: "No",
        overallRating: 4,
        detailsText:
          "The people there are lovely! My mentor and manager were amazing and supported me well. My only issue is that the intern project itself did not challenge me or really allow me to grow as a designer.",
        duration: "2 - 3 months",
        learningGrowthRating: 3,
        recRating: 4,
      },
      {
        timestamp: "11/30/2020 16:00:32",
        companyName: "Bridge Diagnostics",
        jobType: "Internship",
        positionName: "Software Engineer Intern",
        location: "Irvine, CA",
        remote: "No",
        overallRating: 3,
        detailsText:
          "I was the only SWE intern at the time, and since it was a startup, I was one of the only SWE people directly at the company (and not outsourced). This meant I reported to the Operations Manager, and we didn't have basic SWE infrastructure (I built a lot of it myself). It was, however, really good for my growth in terms of business and meetings, so my communication skills improved a lot. I also worked with some pretty amazing people, and the technical advisor is one of my favorite people in the world. He's just on the board (so doesn't work for the company), but I've had several fruitful conversations with him. I also had a lot of space to work and think about projects end-to-end, so it was a lot of \"power\" for an intern looking for experience. Pay was quite awful, but like I mentioned, I was in it for the experience so it made it better.",
        duration: "4 - 6 months",
        learningGrowthRating: 5,
        recRating: 3,
      },
      {
        timestamp: "11/30/2020 19:52:00",
        companyName: "Google",
        jobType: "Internship",
        positionName: "Software Engineering Intern",
        location: "Mountainview, CA",
        remote: "No",
        overallRating: 5,
        detailsText:
          "Google has arguably some of the best perks in the tech industry and those perks are extended to interns. There are lots of fun intern activities, free food, and gamerooms/massage rooms/nap rooms to enjoy. And you will be given an intern project that will certainly improve your skills as a software developer and ample support to ensure your project is a success.",
        duration: "2 - 3 months",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "11/30/2020 22:22:31",
        companyName: "Microsoft",
        jobType: "Internship",
        positionName: "Software Engineering Intern, Explore Intern",
        location: "Redmond, WA",
        remote: "Yes",
        overallRating: 4,
        detailsText:
          "Working in person would have make a better experience, but overall was pretty great. Lots of smart people and cool projects. Their intern program is very well planned out and provides lots of opportunities to bond with other interns and network.",
        duration: "4 - 6 months",
        learningGrowthRating: 4,
        recRating: 5,
      },
      {
        timestamp: "12/1/2020 1:18:15",
        companyName: "Workday",
        jobType: "Internship",
        positionName: "Software Application Engineer Intern",
        location: "Pleasanton, CA",
        remote: "No",
        overallRating: 5,
        detailsText:
          "The internship was well organized, fun, and fulfilling. The culture at Workday is amazing (fun is one of their core values)! I learned a lot from the internship and was able to work on practical projects (the features I worked on were actually released and are currently used by their customers). One interesting thing about working as an application engineer intern is that you get to use learn/use their proprietary language (but this skill might not be as transferable compared to using common coding languages on the job -- something to think about). Overall, it was a very positive experience!",
        duration: "2 - 3 months",
        learningGrowthRating: 5,
        recRating: 4,
      },
      {
        timestamp: "12/1/2020 10:42:12",
        companyName: "Intel",
        jobType: "Internship",
        positionName: "Software Engineering Intern",
        location: "Arizona",
        remote: "Yes",
        overallRating: 5,
        detailsText:
          "Helpful team and mentors, very flexible, tailor projects to your interests, smooth hiring process",
        duration: "4 - 6 months",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "12/1/2020 10:48:40",
        companyName: "Microsoft",
        jobType: "Internship",
        positionName: "Explore Intern",
        location: "Redmond, WA",
        remote: "Yes",
        overallRating: 4,
        detailsText:
          "Although my internship was remote, I was lucky enough to form a good relationship with my mentors and feel connected to them. I was also able to learn a lot from them.",
        duration: "2 - 3 months",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "12/1/2020 10:53:03",
        companyName: "Zillow Group",
        jobType: "Internship",
        positionName: "Software Development Engineering Intern",
        location: "San Francisco, CA - Remote",
        remote: "Yes",
        overallRating: 4,
        detailsText:
          "I really enjoyed working with my team and being a part of Zillow's culture. Everyone was super willing to talk to interns -- even the CEO and CTO; I also had small meetings and 1:1's with the Engineering Directors of my organization within the company. I also had lots of support from my team as well as an Intern Advocate, who was an FTE that was also a Zillow Group intern in the past. The only reason why I wouldn't give my experience a 5 is because of the sparse intern activities and interaction with other interns.",
        duration: "2 - 3 months",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "12/1/2020 10:53:50",
        companyName: "Facebook",
        jobType: "Internship",
        positionName: "Software Engineering Intern",
        location: "Seattle, WA",
        remote: "Partially remote",
        overallRating: 4,
        detailsText: "",
        duration: "2 - 3 months",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "12/1/2020 10:54:32",
        companyName: "Facebook",
        jobType: "Internship",
        positionName: "Software Engineering Intern",
        location: "Menlo Park, CA",
        remote: "No",
        overallRating: 5,
        detailsText: "",
        duration: "2 - 3 months",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "12/1/2020 11:01:59",
        companyName: "Asurion",
        jobType: "Internship",
        positionName: "Software Engineering Intern",
        location: "San Mateo, CA",
        remote: "No",
        overallRating: 5,
        detailsText:
          "A part of my internship included working with other interns to put together a business case for a new product/area the company could expand into. I really enjoyed working with other interns and most of the work I did for the project was not very technical. By the end of our internship, the company flew the Bay Area interns out to Nashville where the HQ is to present out business case to the CTO.\n\nAside from the business case, my intern project covered many topics and I was able to sample different roles and projects such as iOS and Android mobile development, Machine Learning/Data Science, and IoT. My team operated like a small startup, which I also found as a valuable experience. It was a fantastic first internship experience in that I got to try many different technologies, and I also had my first real code reviews where I learned a lot from one of the senior engineers on my team.",
        duration: "2 - 3 months",
        learningGrowthRating: 5,
        recRating: 4,
      },
      {
        timestamp: "12/1/2020 11:44:08",
        companyName: "Microsoft",
        jobType: "Internship",
        positionName: "Software Engineering Intern",
        location: "Redmond",
        remote: "Yes",
        overallRating: 5,
        detailsText:
          "Supportive team environment, many opportunities to learn and grow, great company culture",
        duration: "2 - 3 months",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "12/1/2020 12:35:41",
        companyName: "Intuit",
        jobType: "Full-time",
        positionName: "Software Engineer (iOS)",
        location: "Mountain View, CA",
        remote: "Yes",
        overallRating: 5,
        detailsText: "",
        duration: "2 - 3 months",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "12/1/2020 14:10:04",
        companyName: "Speckle",
        jobType: "Full-time",
        positionName: "Lead Software Engineer",
        location: "Irvine, CA",
        remote: "Yes",
        overallRating: 4,
        detailsText:
          "It is still a startup, so deadlines are intense and there are only 3 full time engineers, including myself. However I do love the job and the environment is great.",
        duration: "4 - 6 months",
        learningGrowthRating: 5,
        recRating: 4,
      },
      {
        timestamp: "12/1/2020 16:57:21",
        companyName: "Amazon",
        jobType: "Internship",
        positionName: "Software Development Engineer Intern",
        location: "Seattle, CA",
        remote: "No",
        overallRating: 4,
        detailsText: "",
        duration: "2 - 3 months",
        learningGrowthRating: 3,
        recRating: 5,
      },
      {
        timestamp: "12/1/2020 16:58:09",
        companyName: "Amazon",
        jobType: "Internship",
        positionName: "Software Development Engineer Intern",
        location: "Cupertino, CA",
        remote: "Yes",
        overallRating: 3,
        detailsText: "",
        duration: "2 - 3 months",
        learningGrowthRating: 4,
        recRating: 4,
      },
      {
        timestamp: "12/1/2020 17:19:19",
        companyName: "Visa, Inc",
        jobType: "Internship",
        positionName: "Software Development Intern",
        location: "Foster City, CA",
        remote: "No",
        overallRating: 4,
        detailsText:
          "I felt like the team that I joined wasn't fully prepared to have an intern join because they weren't sure what I was going to work when I first arrived. The first two weeks were onboarding, understanding what the team I joined worked on and some intern events, but after those two weeks it felt like my onboarding for the team continued a little longer than anticipated. It felt like it wasn't until the middle of the internship that I was put on a project and the project I was on was on a deadline so I felt like I only really coded for about 3, possibly 4 weeks out of 12. This was fine, I just expected that I would have more to work on so I could learn more. Overall though, the internship experience was nice. It was great that I was able to be surrounded by the other interns and they had several events for all of us to learn about what each other was doing.",
        duration: "2 - 3 months",
        learningGrowthRating: 3,
        recRating: 4,
      },
      {
        timestamp: "12/1/2020 17:32:18",
        companyName: "Etsy, Inc.",
        jobType: "Full-time",
        positionName: "Software Engineer II",
        location: "Brooklyn, NY",
        remote: "Partially remote",
        overallRating: 5,
        detailsText:
          "I feel so blessed to be a part of this company and the team I'm on. My experience at Etsy has been nothing but great. They did such an amazing job during the transition from working in the office to becoming fully remote. They also provided all its employees with extra assistance to make sure our home office set-ups were comfortable and ergonomic-friendly. I don't know how it happened, but the team I was placed on has been great as well. My team members are all so supportive and caring. The work that I get assigned is work that will help me grow as an engineer rather than busy work. It's also work that helps me practice well known software development principles. They are thoughtful in the work I get assigned to ensure that I am gaining the proper software engineering skills needed.",
        duration: "Over 1 year, less than 2 years",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "12/1/2020 18:27:59",
        companyName: "Cisco",
        jobType: "Full-time",
        positionName: "Software Engineer",
        location: "San Jose, CA",
        remote: "Partially remote",
        overallRating: 4,
        detailsText:
          "The environment was very warm and welcoming. Everyone is very nice and helpful.",
        duration: "2 - 3 months",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "12/1/2020 21:30:26",
        companyName: "Microsoft",
        jobType: "Internship",
        positionName: "Explore",
        location: "Redmond, Washington",
        remote: "No",
        overallRating: 5,
        detailsText:
          "Great introductory internship to the field of tech! It was amazing learning how PM and Software Engineering works in a large company. It is a rare opportunity in which a company offers both PM and SWE in a single internship and I had thoroughly loved learning both sides.",
        duration: "2 - 3 months",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "12/1/2020 23:32:02",
        companyName: "Zillow Group",
        jobType: "Internship",
        positionName: "Software Engineering Intern",
        location: "Irvine, CA",
        remote: "No",
        overallRating: 5,
        detailsText:
          "Learned a lot in 3 months, was exposed to lots of different technologies, was a good transition to full-time, had lots of workshops for us to attend to help us learn and grow (public speaking, insight training to learn more about different personality types and how to best work with and understand people), a pretty fun internship outside of just coding",
        duration: "2 - 3 months",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "12/1/2020 23:46:53",
        companyName: "Microsoft",
        jobType: "Internship",
        positionName: "Software Engineering Intern",
        location: "Redmond, WA",
        remote: "Yes",
        overallRating: 4,
        detailsText:
          "I think it was a very solid internship however there were of course things that could have gone smoother.",
        duration: "4 - 6 months",
        learningGrowthRating: 4,
        recRating: 5,
      },
      {
        timestamp: "12/3/2020 20:10:31",
        companyName: "Workday",
        jobType: "Internship",
        positionName: "Software Development Engineer Intern",
        location: "Pleasanton, CA",
        remote: "No",
        overallRating: 4,
        detailsText:
          "Very solid program with structured project and intern activities. My project gave me a good introduction to the industry. You get paired with a tech mentor who works with you day to day with your project and an intern buddy for any other questions you may have. Lots of intern related events like baseball game, alcatraz, scavenger hunt to develop great connections with fellow interns.",
        duration: "2 - 3 months",
        learningGrowthRating: 5,
        recRating: 5,
        contactInfo: "",
      },
      {
        timestamp: "12/5/2020 20:56:29",
        companyName: "UC Irvine Office of Information Technology",
        jobType: "Part-time",
        positionName: "Quality Assurance Student Assistant",
        location: "Irvine, CA",
        remote: "Partially remote",
        overallRating: 5,
        detailsText:
          "Since it was an on campus part time job, they had super flexible hours. If you have a project, midterm or final coming up, they understand that you need to take time off. The team was also incredibly supportive - if you wanted to learn something that's not within your usual job duties - they would still provide you with the means to do so!",
        duration: "Over 1 year, less than 2 years",
        learningGrowthRating: 5,
        recRating: 5,
      },
      {
        timestamp: "12/10/2020 23:56:26",
        companyName: "Microsoft",
        jobType: "Internship",
        positionName: "Explore Intern, Software Engineering Intern",
        location: "Seattle, WA",
        remote: "No",
        overallRating: 5,
        detailsText: "",
        duration: "4 - 6 months",
        learningGrowthRating: 5,
        recRating: 5,
      },
    ];
    resolve(RAW_DATA);
  });
}