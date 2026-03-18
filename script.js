document.addEventListener("DOMContentLoaded", () => {
  const sudan = document.getElementById("sudan");
  const afghanistan = document.getElementById("afghanistan");
  const ethiopia = document.getElementById("ethiopia");
  const car = document.getElementById("car");
  const sierraleone = document.getElementById("sierraleone");

  if (!sudan || !afghanistan || !ethiopia || !car || !sierraleone) {
    console.error("One or more countries not found", {
      sudan,
      afghanistan,
      ethiopia,
      car,
      sierraleone
    });
    return;
  }

  function activate(country, title, text, image) {
    country.style.cursor = "pointer";

    country.addEventListener("mouseenter", () => {
      country.style.opacity = "0.7";
    });

    country.addEventListener("mouseleave", () => {
      country.style.opacity = "1";
    });

    country.addEventListener("click", () => {
      document.getElementById("story-title").textContent = title;
      document.getElementById("story-text").textContent = text;
      document.getElementById("story-image").src = image;
      document.getElementById("story-image").alt = title;
      document.getElementById("story-box").style.display = "block";
    });
  }

  activate(
    sudan,
    "Sudan",
    "In Sudan, a 12 year old girl named Muzdalifa used to travel long distances to descend down a well in order to retrieve water. Many households in the Al-Serif Village struggled with insufficient water, compromising their hygeine. Lack of clean water heavily increases health risks, especially for women and girls. With support from local organizations, UNICEF constructed a solar powered water system that provides safe drinking water close to the homes of the village.",
    "sudan.jpg"
    
    
  );

  activate(
    afghanistan,
    "Afghanistan",
    "Fawzia, a 10 year old girl from Afghanistan used to make daily trips to fetch water for her family. She would push her wheelbarrow of jerrycans 30 minutes to the water tap, wait in an hour long queue, then trek 30 minutes home with full cans, all before grabbing her backpack for school. UNICEF built a water tap system that provides her and her family with water any time they need. With support and funding, UNICEF was able to build sustainable water systems for 31,000 people in the region.",
    "afghanistan.jpg"
  );

  activate(
    ethiopia,
    "Ethiopia",
    "Every day, 13 year old Aysha walks an 8 hour trip across barren land to fetch water for her family. She lives in a remote region of Ethiopia, where the only access to water is the nearest river. She loads jerrycans on her camel and begins her trip at 6:30 am. It isn’t until around 4:00 pm that she arrives home and will eat for the first time of the day. Excessive time spent fetching water cuts short the hours that Aysha should be playing, learning, and just being a child. This is the reality for many children globally.",
    "ethiopia.jpg"
  );

  activate(
    car,
    "Central African Republic",
    "Milène, a 29 year old mother of three, stands in the hot sun trying to fill large jerrycans with water because clean water is so hard to find in her town in the Central African Republic. She avoids walking into the bush for water because armed men might attack her, and the water there isn’t safe to drink. There are only a few public water fountains, so she and others must come very early or in the heat of the day just to get enough water. Organizations like the ICRC are installing standpipes and boreholes, but the demand still outweighs the limited water available, and families like Milène’s continue to struggle.",
    "car.jpg"
  );

  activate(
    sierraleone,
    "Sierra Leone",
    "Rural Sierra Leone struggles with access to clean water. Women and children are disproportionally affected, walking for hours each day for water. Mariama, a mother from the Nyandehun village in the Malegohun Chiefdom of Kenema District explains how they walk for hours for water to find out it is not pure. Her son often deals with health issues, along with several others in the village. In response, GOAL has implemented comprehensive WASH (Water, Sanitation, and Hygiene) programmes across the Kenema and Moyamba districts.",
    "sierraleone.jpg"
  );

  document.getElementById("close-story").addEventListener("click", () => {
    document.getElementById("story-box").style.display = "none";
  });
});

