
export type LessonType = "Lesson" | "Quiz" | "Practice";

export const unitsData = {
  "1": { 
    title: "Unit 1: The Basics", 
    lessons: [
      { id: "1", title: "Greetings and Introductions", description: "Pelajari cara menyapa dan memperkenalkan diri.", type: "Lesson", completed: false },
      { id: "2", title: "The Alphabet & Numbers", description: "Kenali huruf dan angka dalam bahasa Inggris.", type: "Lesson", completed: false },
      { id: "3", title: "Basic Phrases", description: "Kuasai frasa penting seperti 'thank you' dan 'please'.", type: "Lesson", completed: false },
      { id: "4", title: "Quiz: The Basics", description: "Uji pemahaman Anda tentang dasar-dasar.", type: "Quiz", completed: false },
    ] 
  },
  "2": { 
    title: "Unit 2: People & Things",
    lessons: [
      { id: "1", title: "Family Members", description: "Pelajari nama-nama anggota keluarga.", type: "Lesson", completed: false },
      { id: "2", title: "Common Jobs", description: "Kenali nama-nama pekerjaan umum.", type: "Lesson", completed: false },
      { id: "3", title: "Objects in a Room", description: "Sebutkan benda-benda yang ada di dalam ruangan.", type: "Practice", completed: false },
      { id: "4", title: "Quiz: People & Things", description: "Uji kosakata Anda tentang orang dan benda.", type: "Quiz", completed: false },
    ]
  },
  "3": { 
    title: "Unit 3: Simple Sentences",
    lessons: [
      { id: "1", title: "Using 'is', 'am', 'are'", description: "Pelajari cara menggunakan 'to be' dalam kalimat.", type: "Lesson", completed: false },
      { id: "2", title: "This is / That is", description: "Belajar menunjuk benda dengan 'this' dan 'that'.", type: "Lesson", completed: false },
      { id: "3", title: "Making Simple Statements", description: "Latihan membuat kalimat positif dan negatif sederhana.", type: "Practice", completed: false },
      { id: "4", title: "Quiz: Simple Sentences", description: "Uji kemampuan Anda membuat kalimat.", type: "Quiz", completed: false },
    ]
  },
  "4": { 
    title: "Unit 4: Asking Questions",
    lessons: [
      { id: "1", title: "What & Who", description: "Belajar bertanya tentang benda dan orang.", type: "Lesson", completed: false },
      { id: "2", title: "Where & When", description: "Belajar bertanya tentang tempat dan waktu.", type: "Lesson", completed: false },
      { id: "3", title: "How are you?", description: "Latih cara menanyakan kabar dan menjawabnya.", type: "Practice", completed: false },
      { id: "4", "title": "Quiz: Asking Questions", "description": "Uji kemampuan Anda dalam bertanya.", "type": "Quiz", "completed": false },
    ]
  },
  "5": {
    title: "Unit 5: Food and Dining",
    lessons: [
      { id: "1", title: "Common Food and Drinks", description: "Kenali nama-nama makanan dan minuman umum.", type: "Lesson", completed: false },
      { id: "2", title: "Ordering at a Restaurant", description: "Latihan memesan makanan dan minuman.", type: "Practice", completed: false },
      { id: "3", title: "Quiz: Food and Dining", description: "Uji kosakata Anda seputar makanan.", type: "Quiz", completed: false },
    ]
  },
  "6": {
    title: "Unit 6: Daily Routines",
    lessons: [
      { id: "1", title: "Daily Activities", description: "Jelaskan aktivitas harian dari pagi hingga malam.", type: "Lesson", completed: false },
      { id: "2", title: "Telling Time", description: "Pelajari cara menanyakan dan memberitahu waktu.", type: "Lesson", completed: false },
      { id: "3", title: "Quiz: Daily Routines", description: "Uji pemahaman Anda tentang rutinitas harian.", type: "Quiz", completed: false },
    ]
  }
};
