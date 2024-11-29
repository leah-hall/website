const breeds = {
    "australian-shepherd": {
        name: "Australian Shepherd",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Red_merle_australian_shepherd.jpg/776px-Red_merle_australian_shepherd.jpg",
        description: "Australian Shepherds are intelligent, energetic, and loyal. They are excellent working dogs, especially for herding."
    },
    "beagle": {
        name: "Beagle",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Beagle_600.jpg",
        description: "Beagles are curious, friendly, and merry dogs. They are excellent hunters and great with children."
    },
    "chow-chow": {
        name: "Chow Chow",
        image: "https://parliamentanimalhospital.ca/wp-content/uploads/2023/04/Why-do-Chows-Have-Blue-Tongues.jpg"
        description: "Chow Chows are independent and dignified dogs with a unique lion-like mane."
    },
    "dachshund": {
        name: "Dachshund",
        image: "https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-700141990-e1688418771301.jpg?resize=1024,763"
        description: "Dachshunds are playful and curious dogs, famous for their unique body shape."
    },
    "english-bulldog": {
        name: "English Bulldog",
        image: "https://cbtdogbehaviour.com/wp-content/uploads/2024/07/Old-English-Bulldog_-A-Guide-To-This-Beloved-Breed-2763711222-980x549.jpg",
        description: "English Bulldogs are gentle, courageous, and affectionate companions."
    },
    "french-bulldog": {
        name: "French Bulldog",
        image: "https://cdn.britannica.com/44/233844-050-A0F9F39C/French-bulldog.jpg?w=300",
        description: "French Bulldogs are playful, adaptable, and affectionate with large, bat-like ears."
    },
    "german-shepherd": {
        name: "German Shepherd",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg/220px-German_Shepherd_-_DSC_0346_%2810096362833%29.jpg",
        description: "German Shepherds are intelligent, loyal, and versatile dogs often used in police work."
    },
    "husky": {
        name: "Husky",
        image: "https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg?w=300",
        description: "Huskies are friendly, energetic, and outgoing dogs known for their thick fur and striking eyes."
    },
    "irish-setter": {
        name: "Irish Setter",
        image: "https://www.animalbehaviorcollege.com/wp-content/uploads/2015/02/irish-setter-grooming.jpg",
        description: "Irish Setters are elegant, energetic, and friendly dogs with a striking red coat."
    },
    "jack-russell-terrier": {
        name: "Jack Russell Terrier",
        image: "https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11180245/202105Jack-Russell-Terrier-FeaturedImage.jpg",
        description: "Jack Russell Terriers are fearless, energetic, and intelligent dogs originally bred for hunting."
    },
    "keeshond": {
        name: "Keeshond",
        image: "https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11162108/202107Keeshond-FeaturedImage.jpg",
        description: "Keeshonds are cheerful, affectionate, and friendly dogs with a plush double coat."
    },
    "labrador": {
        name: "Labrador",
        image: "https://images.ctfassets.net/2djrn56blv6r/39bq5PGiyAKHSDnORlj2ju/86aded978717d4bb453e51d90e5c682c/three_Labrador_Retievers_sitting_in_the_grass.jpeg?fm=webp&q=75&w=3840",
        description: "Labradors are friendly, outgoing, and even-tempered, making them one of the most popular breeds worldwide."
    },
    "malamute": {
        name: "Alaskan Malamute",
        image: "https://www.dogster.com/wp-content/uploads/2024/10/Alaskan-Malamute-dog-standing-sideways-on-the-grass_Hanna-Borysenko_Shutterstock.jpg",
        description: "Alaskan Malamutes are strong, loyal, and playful dogs bred for hauling heavy loads in arctic regions."
    },
    "newfoundland": {
        name: "Newfoundland",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Newfoundland_600.jpg/440px-Newfoundland_600.jpg",
        description: "Newfoundlands are large, gentle, and sweet-natured dogs often called 'gentle giants.'"
    },
    "otterhound": {
        name: "Otterhound",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Otterhound_600.jpg/440px-Otterhound_600.jpg",
        description: "Otterhounds are playful and friendly dogs with a unique shaggy coat, originally bred for hunting."
    },
    "poodle": {
        name: "Poodle",
        image: "https://image.petmd.com/files/styles/978x550/public/2023-01/toy-poodle.jpg?w=1080&q=75",
        description: "Poodles are intelligent, graceful, and hypoallergenic dogs known for their stylish curly coat."
    },
    "queensland-heeler": {
        name: "Queensland Heeler",
        image: "https://cdn.britannica.com/50/236050-050-5AA32B83/Australian-cattle-dog.jpg?w=300",
        description: "Queensland Heelers, also known as Australian Cattle Dogs, are hardworking and loyal herding dogs."
    },
    "rottweiler": {
        name: "Rottweiler",
        image: "https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11161901/202106Rottweiler_Feature-Image.jpg",
        description: "Rottweilers are strong, confident, and protective dogs, often used in police and military work."
    },
    "samoyed": {
        name: "Samoyed",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Samoyed_600.jpg/440px-Samoyed_600.jpg",
        description: "Samoyeds are friendly, gentle, and hardworking dogs, known for their beautiful white coats."
    },
    "terrier": {
        name: "Terrier",
        image: "https://cdn.britannica.com/48/233848-004-F54F1C52/Yorkshire-Terrier-dog.jpg?w=300",
        description: "Terriers are energetic and courageous dogs, often small in size with a tenacious nature."
    },
    "vizsla": {
        name: "Vizsla",
        image: "https://cdn.britannica.com/48/233848-004-F54F1C52/Yorkshire-Terrier-dog.jpg?w=300",
        description: "Vizslas are affectionate, energetic, and highly trainable dogs known for their sleek golden coat."
    },
    "weimaraner": {
        name: "Weimaraner",
        image: "https://www.akc.org/wp-content/uploads/2017/11/Weimaraner-MP.jpg",
        description: "Weimaraners are elegant, energetic dogs, often referred to as 'silver ghosts' due to their unique coat color."
    },
    "xoloitzcuintli": {
        name: "Xoloitzcuintli",
        image: "https://www.thesprucepets.com/thmb/zW2fRbuajmjLZsHdpoIlPA1r2CI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1288698179-a40c40b7bb9d4b89a62187b73842050d.jpg",
        description: "Xoloitzcuintlis, also known as Mexican Hairless Dogs, are ancient, calm, and loyal companions."
    },
    "yorkshire-terrier": {
        name: "Yorkshire Terrier",
        image: "https://cdn05.zipify.com/E6CqC2n9QbjqQEKyGwyxRpcRpi8=/fit-in/3840x0/9cd705f45b554f3ca91da37f525d600c/pot013-blog-hero-horizontal-32.jpeg",
        description: "Yorkshire Terriers are small, energetic, and affectionate dogs with a silky coat."
    },
    "zuchon": {
        name: "Zuchon",
        image: "https://www.sidewalkdog.com/wp-content/uploads/2024/06/DALL%C2%B7E-2024-06-28-03.48.49-A-Zuchon-mix-dog-breed-standing-outdoors.-The-dog-features-a-small-sturdy-build-expressive-dark-eyes-and-a-coat-that-can-be-fluffy-and-slightly-wav-1024x770.webp",
        description: "Zuchons are friendly, affectionate, and hypoallergenic dogs, often known as 'Shichons' or 'Teddy Bears.'"
    }
};

function showBreedInfo(breed) {
    console.log(`breed ${breed}`);
    const breedInfo = breeds[breed];
    console.log(`breedInfo ${breedInfo}`);
    document.getElementById("breed-name").textContent = breedInfo.name;
    document.getElementById("breed-image").src = breedInfo.image;
    document.getElementById("breed-description").textContent = breedInfo.description;
}
