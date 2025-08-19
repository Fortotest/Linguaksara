
export type StoryCategory = "Fiksi & Sastra" | "Sejarah & Biografi" | "Self-Improvement & Produktivitas" | "Filsafat & Politik";

export type WordDefinition = {
  word: string;
  definition: string;
};

type MultipleChoiceQuestion = {
  question: string;
  options: string[];
  answer: string;
};

type TrueFalseQuestion = {
  statement: string;
  answer: boolean;
};

type Activity = 
  | { type: 'multiple-choice', questions: MultipleChoiceQuestion[] }
  | { type: 'true-false', questions: TrueFalseQuestion[] }
  | { type: 'chronology', items: string[] } // items are in correct order
  | { type: 'match', pairs: { item: string, match: string }[] }
  | { type: 'guess-who', suspects: { name: string, image: string }[], culprit: string }
  | { type: 'draw-route' }
  | { type: 'plan-habit' }
  | { type: 'identify-distractions' }
  | { type: 'scenario-simulation' };


export interface Story {
  id: string;
  title: string;
  author: string;
  synopsis: string;
  level: 'Pemula' | 'Menengah' | 'Lanjutan';
  category: StoryCategory;
  image: string;
  dataAiHint: string;
  paragraphs: string[];
  keywords: WordDefinition[];
  activity: Activity;
}

export const readingData: Story[] = [
  {
    id: "1",
    title: "A Journey to the Ancient City",
    author: "Alex Thompson",
    synopsis: "Ikuti tim penjelajah dalam perjalanan mendebarkan untuk menemukan kota kuno Eldoria yang telah lama hilang.",
    level: "Menengah",
    category: "Fiksi & Sastra",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "ancient city landscape",
    paragraphs: [
        "The sun cast long shadows as our team made the final ascent to the hidden city of Eldoria. For centuries, this place was considered a myth, a whisper among historians.",
        "The journey was arduous, testing our limits at every turn. We navigated through dense jungles where unseen creatures chirped, and crossed treacherous rivers with currents that threatened to pull us under.",
        "Yet, our team remained resilient, driven by the promise of discovery. As we finally passed through the moss-covered stone gates, a sense of awe washed over us.",
        "The air grew still and a serene silence replaced the cacophony of the jungle. The architecture was magnificent, unlike anything we had ever seen. Towers pierced the clouds, and bridges made of gleaming crystal spanned vast chasms.",
        "We felt a profound connection to the past, standing amidst the silent ruins. Our expedition's primary goal was to document these findings and preserve the incredible legacy of this place, ensuring that Eldoria would never be forgotten again."
    ],
    keywords: [
      { word: "ascent", definition: "Pendakian atau perjalanan naik ke puncak gunung atau bukit." },
      { word: "arduous", definition: "Membutuhkan usaha yang sangat berat; sulit dan melelahkan." },
      { word: "resilient", definition: "Mampu bertahan atau pulih dengan cepat dari kesulitan; tangguh." },
      { word: "awe", definition: "Perasaan takjub dan hormat yang bercampur dengan sedikit rasa takut atau heran." },
      { word: "serene", definition: "Tenang, damai, dan tidak terganggu." },
      { word: "profound", definition: "Sangat mendalam atau kuat; menunjukkan pengetahuan atau wawasan yang hebat." },
      { word: "legacy", definition: "Sesuatu yang ditinggalkan oleh seseorang atau dari masa lalu; warisan." },
    ],
    activity: {
      type: 'chronology',
      items: [
        "Menavigasi hutan lebat",
        "Menyeberangi sungai berbahaya",
        "Melewati gerbang batu yang tertutup lumut",
        "Melihat arsitektur yang megah",
        "Mendokumentasikan temuan untuk melestarikan warisan"
      ]
    }
  },
  {
    id: "2",
    title: "The Last Robot",
    author: "Jane C. Foster",
    synopsis: "Di dunia yang sunyi, robot terakhir yang tersisa menemukan tujuan baru setelah bertemu dengan seorang anak manusia.",
    level: "Pemula",
    category: "Fiksi & Sastra",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "lonely robot",
    paragraphs: [
      "Unit 734 was the last of its kind. All other robots had become obsolete, their circuits silenced by time. For years, Unit 734 wandered the quiet, empty cities, performing its programmed tasks for no one.",
      "A global shutdown had saved it from the fate of the others. While they slept, it worked, maintaining a world that had moved on. This solitude was its entire existence, a lonely vigil in a mechanical world.",
      "One day, a flicker of movement caught its optical sensors. A small human child, full of curiosity, was watching it from behind a rusted car. The child was not afraid, only intrigued.",
      "Slowly, a bond formed between them. The child taught Unit 734 about laughter and games, concepts not found in its programming. The robot, in turn, showed the child the hidden wonders of the city's machinery.",
      "In the end, Unit 734 learned that its purpose wasn't just about tasks. It was about connection, friendship, and a form of humanity it never knew it could possess. It was no longer just a machine, but a guardian."
    ],
    keywords: [
        { word: "obsolete", definition: "Tidak lagi diproduksi atau digunakan; ketinggalan zaman." },
        { word: "solitude", definition: "Keadaan menyendiri atau terasing; kesendirian." },
        { word: "curiosity", definition: "Keinginan yang kuat untuk mengetahui atau mempelajari sesuatu." },
        { word: "bond", definition: "Hubungan atau ikatan antara orang-orang atau kelompok." },
        { word: "humanity", definition: "Kualitas menjadi manusia, seperti kemampuan untuk mencintai dan berbelas kasih." }
    ],
    activity: {
      type: 'true-false',
      questions: [
        { statement: "Unit 734 was one of many robots still active.", answer: false },
        { statement: "The robot was initially scared of the human child.", answer: false },
        { statement: "The child taught the robot about friendship.", answer: true },
        { statement: "The robot's only purpose was to perform its programmed tasks.", answer: false },
        { statement: "Unit 734 felt lonely before meeting the child.", answer: true }
      ]
    }
  },
   {
    id: "3",
    title: "The Case of the Missing Diamond",
    author: "Arthur Doyle",
    synopsis: "Seorang detektif brilian harus memecahkan kasus hilangnya berlian berharga dengan mewawancarai tiga tersangka yang penuh rahasia.",
    level: "Menengah",
    category: "Fiksi & Sastra",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "detective mystery",
    paragraphs: [
        "The Blue Star Diamond, a gem of legendary size and value, had vanished. Detective Miles Corbin surveyed the room, the air thick with tension. The task was clear: find the diamond, and find the thief among the three people present.",
        "First was Lady Eleanor, the owner, who claimed she was in the garden. Then, Mr. Silas, the butler, who insisted he was polishing silver in the kitchen. Finally, Marco, the art dealer, who said he was admiring a painting in the hall. Each suspect had a seemingly perfect alibi.",
        "Corbin's sharp eyes scanned the room again. He noticed a tiny, muddy footprint near the empty display case—far too small for a man's shoe. He also saw a faint scratch on the floor, as if something heavy had been dragged. This was the first clue.",
        "He questioned Lady Eleanor about her gardening shoes. She nervously denied wearing them inside. At that moment, Corbin had a moment of revelation. The clues clicked together, painting a clear picture of the crime.",
        "Corbin revealed his findings. Lady Eleanor, burdened by debt, had staged the theft. The 'muddy footprint' was from her own shoe, and she had hidden the diamond inside a hollow book. The case of the missing diamond was closed."
    ],
    keywords: [
        { word: "detective", definition: "Seseorang, terutama anggota kepolisian, yang tugasnya menyelidiki dan memecahkan kejahatan." },
        { word: "suspect", definition: "Seseorang yang diduga melakukan kejahatan atau kesalahan." },
        { word: "alibi", definition: "Klaim atau bukti bahwa seseorang berada di tempat lain ketika suatu tindak kejahatan terjadi." },
        { word: "clue", definition: "Sebuah fakta atau benda yang memberikan petunjuk untuk memecahkan suatu masalah atau misteri." },
        { word: "reveal", definition: "Membuat sesuatu yang sebelumnya rahasia atau tidak diketahui menjadi diketahui." }
    ],
    activity: {
      type: 'guess-who',
      suspects: [
        { name: "Lady Eleanor", image: "https://placehold.co/100x100.png" },
        { name: "Mr. Silas", image: "https://placehold.co/100x100.png" },
        { name: "Marco", image: "https://placehold.co/100x100.png" }
      ],
      culprit: "Lady Eleanor"
    }
  },
  {
    id: "4",
    title: "The Rise and Fall of the Roman Empire",
    author: "Edward Gibbon Jr.",
    synopsis: "Sebuah tinjauan singkat tentang bagaimana Kekaisaran Romawi tumbuh menjadi kekuatan dominan dan faktor-faktor yang menyebabkan keruntuhannya.",
    level: "Lanjutan",
    category: "Sejarah & Biografi",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "roman empire colosseum",
    paragraphs: [
        "The story of the Roman Empire begins not as an empire, but as a humble republic. Founded in 509 BCE, the Roman Republic was built on principles of law and elected representation. Through centuries of conflict and expansion, it grew from a small city-state into a vast power.",
        "The golden age, or Pax Romana, was a period of unprecedented peace and prosperity. The empire made incredible achievements in engineering, architecture, law, and governance. Roads, aqueducts, and magnificent cities like Rome itself stood as testaments to its power.",
        "However, by the 3rd century CE, the empire began to face serious challenges. Factors contributing to its decline included political instability, economic troubles, over-expansion, and constant pressure from barbarian tribes along its borders.",
        "The official fall of the Western Roman Empire is often dated to 476 CE, when the last Roman emperor was deposed. The empire had become too large to govern effectively, and its internal divisions weakened it fatally.",
        "Despite its collapse, the legacy of the Roman Empire endured. Its language, laws, and architectural principles would heavily influence the development of Western civilization for millennia to come, leaving an indelible mark on the world."
    ],
    keywords: [
      { word: "republic", definition: "Sebuah negara di mana kekuasaan dipegang oleh rakyat dan perwakilan yang mereka pilih." },
      { word: "empire", definition: "Sebuah kelompok negara atau wilayah yang luas yang dikuasai oleh satu penguasa atau pemerintahan." },
      { word: "achievements", definition: "Sesuatu yang besar yang berhasil dilakukan, biasanya melalui usaha atau keterampilan." },
      { word: "decline", definition: "Penurunan secara bertahap dalam kekuatan, kemakmuran, atau kualitas." },
      { word: "legacy", definition: "Sesuatu yang ditinggalkan oleh seseorang atau dari masa lalu; warisan." }
    ],
    activity: {
      type: 'multiple-choice',
      questions: [
          { question: "What was the initial form of Roman government?", options: ["Monarchy", "Republic", "Empire", "Democracy"], answer: "Republic" },
          { question: "What does 'Pax Romana' refer to?", options: ["A great war", "A period of peace and prosperity", "The fall of Rome", "A Roman law"], answer: "A period of peace and prosperity" },
          { question: "Which of these was NOT a factor in the decline of the Roman Empire?", options: ["Political instability", "Economic troubles", "Lack of military", "Over-expansion"], answer: "Lack of military" }
      ]
    }
  }
  // ... Tambahkan 8 cerita lainnya di sini mengikuti struktur yang sama
];
