export class GupLevel {
  static GUP_10 = "10th Gup (White Belt)";
  static GUP_9 = "9th Gup (White Belt / Yellow Stripe)";
  static GUP_8 = "8th Gup (Yellow Belt)";
  static GUP_7 = "7th Gup (Yellow Belt / Green Stripe)";
  static GUP_6 = "6th Gup (Green Belt)";
  static GUP_5 = "5th Gup (Green Belt / Blue Stripe)";
  static GUP_4 = "4th Gup (Blue Belt)";
  static GUP_3 = "3rd Gup (Blue Belt / Red Stripe)";
  static GUP_2 = "2nd Gup (Red Belt)";
  static GUP_1 = "1st Gup (Red Belt / Black Stripe)";
}

export const patternsData = [
    {
        id: "chon-ji",
        name: "Chon-Ji",
        gup: "9th Gup (White Belt / Yellow Stripe)",
        movements: 19,
        meaning: "It means literally 'the Heaven the Earth'. Its is, in the Orient, interpreted as the creation of the world or the beginning of human history, therefore, it is the initial pattern learned by the beginner. It consists of two similar parts, one to represent the Heaven and the other the Earth."
    },
    {
        id: "dan-gun",
        name: "Dan-Gun",
        gup: "8th Gup (Yellow Belt)",
        movements: 21,
        meaning: "Named after the holy Dan-Gun, the legendary founder of Korea in the year 2333 B.C. He is said to be the grandson of the god of Heaven."
    },
    {
        id: "do-san",
        name: "Do-San",
        gup: "7th Gup (Yellow Belt / Green Stripe)",
        movements: 24,
        meaning: "Pseudonym of the patriot Ahn Chang-Ho (1876–1938). The 24 movements represent his entire life which he devoted to furthering education of Korea and its independence movement."
    },
    {
        id: "won-hyo",
        name: "Won-Hyo",
        gup: "6th Gup (Green Belt)",
        movements: 28,
        meaning: "Won-Hyo was the noted monk who introduced Buddhism to the Silla Dynasty in the year 686 A.D."
    },
    {
        id: "yul-gok",
        name: "Yul-Gok",
        gup: "5th Gup (Green Belt / Blue Stripe)",
        movements: 38,
        meaning: "Yul-Gok is the pseudonym of a great philosopher Yi O (1536-1584) nicknamed 'Confucius of Korea'. The 38 movements of this pattern refer to his birthplace on 38° latitude and the diagram represents 'scholar'."
    },
    {
        id: "joong-gun",
        name: "Joong-Gun",
        gup: "4th Gup (Blue Belt)",
        movements: 32,
        meaning: "Joong-Gun is named after the patriot An Joong-Gun who assassinated Hiro-Bumi Ito, the first Japanese governor-general of Korea, known as the man who played the leading part in the Korean-Japan merger. There are 32 movements in this pattern to represent Mr. An's age when he was executed at Lui-Shung prison (1910)."

    },
    {
        id: "toi-gye",
        name: "Toi-Gye",
        gup: "3rd Gup (Blue Belt / Red Stripe)",
        movements: 37,
        meaning: "Toi-Gye is the pen name of the noted scholar Yi Hwang (16th century), an authority on neo-Confucianism. The 37 movements of this pattern refer to his birthplace on 37° latitude, the diagram represents 'scholar'."
    },
    {
        id: "hwa-rang",
        name: "Hwa-Rang",
        gup: "2nd Gup (Red Belt)",
        movements: 29,
        meaning: "Hwa-Rang is named after the Hwa-Rang youth group which originated in the Silla Dynasty in the eary 7th century. The 29 movements refer to the 29th Infantry Division, where Taekwon-Do developed into maturity."
    },
    {
        id: "choong-moo",
        name: "Choong-Moo",
        gup: "1st Gup (Red Belt / Black Stripe)",
        movements: 30,
        meaning: "Choong-Moo was the name given to the great Admiral Yi Soon-Sin of the Yi Dynasty. He was reputed to have invented the first armored battleship (kobukson) in 1592, which is said to be the precursor of the present day submarine. The reason this pattern ends with a left hand attack is to symbolize his regrettable death, having no chance to show his unrestrained potentiality checked by the forced reservation of his loyalty to the king."
    }
];

export const stancesData = [
    {
        name: "Gunnun Sogi (Walking Stance)",
        gup: "10th Gup (White Belt)",
        weightDistribution: "50% / 50%",
        length: "1.5 shoulder widths long",
        width: "1 shoulder width wide"
    },
    {
        name: "Niunja Sogi (L-stance)",
        gup: "9th Gup (White Belt / Yellow Stripe)",
        weightDistribution: "70% rear leg / 30% front leg",
        length: "1.5 shoulder widths long, measured from the toes of the front foot to the outer edge of the back foot",
        width: "2.5 cm"
    },
    {
        name: "Annun Sogi (Sitting Stance)",
        gup: "7th Gup (Yellow Belt / Green Stripe)",
        weightDistribution: "50% / 50%",
        length: "1.5 shoulder widths wide",
        width: "Feet parallel in a line"
    },
    {
        name: "Moa Sogi (Closed Stance)",
        gup: "6th Gup (Green Belt)",
        weightDistribution: "50% / 50%",
        length: "feet together",
        width: "feet together"
    },
    {
        name: "Narani Sogi (Parallel Stance)",
        gup: "10th Gup (White Belt)",
        weightDistribution: "50% / 50%",
        length: "feet are next to each other",
        width: "1 shoulder width wide"
    },
    {
        name: "Gojung Sogi (Fixed Stance)",
        gup: "6th Gup (Green Belt)",
        weightDistribution: "50% / 50%",
        length: "1.5 shoulder widths long, measured from the toes of the front foot to the inner edge of the back foot",
        width: "2.5 cm"
    },
    {
        name: "Guburyo Sogi (Bending Stance)",
        gup: "6th Gup (Green Belt)",
        weightDistribution: "100% on the standing leg",
        length: "one leg stance",
        width: "one leg stance"
    }
];

export const VocabularyData = [
    {
        gup: "10th Gup (White Belt)",
        korean: "tae",
        english: "foot, jumping, kick, breaking with a leg"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "kwon",
        english: "fist, hand, punch, strike, breaking with a hand"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "do",
        english: "thought, way, method, art, principle"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "taekwon-do",
        english: "the way of the foot and fist"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "do bok",
        english: "practice suit"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "do jang",
        english: "training hall"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "ti",
        english: "belt"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "charyot",
        english: "attention"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "kyong ye",
        english: "bow"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "junbi",
        english: "ready"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "sijak",
        english: "commence"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "sogi",
        eglish: "stance"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "goman",
        english: "stop"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "kesok",
        english: "continue"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "baro",
        english: "return"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "swiyo",
        english: "at ease"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "hae san",
        english: "dismissed"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "tyro tora",
        english: "turn"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "gup",
        english: "grade"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "dan",
        english: "degree"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "jeja",
        english: "student"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "orun",
        english: "right"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "wen",
        english: "left"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "boosabum",
        english: "assistant instructor"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "sabum",
        english: "instructor"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "sahyun",
        english: "master"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "saseong",
        english: "grandmaster"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "han chok",
        english: "one way"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "yang chok",
        english: "two way"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "yopap",
        english: "side front"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "dwit",
        english: "back"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "najunde",
        english: "low"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "kaunde",
        english: "middle"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "nopunde",
        english: "high"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "an",
        english: "inner"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "anuro",
        english: "inward"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "bakat",
        english: "outer"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "bakuro",
        english: "outward"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "baro",
        english: "straight"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "bandae",
        english: "reverse"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "naeryo",
        english: "downward"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "matsogi",
        english: "sparring"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "sam bo matsogi",
        english: "three step sparring"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "jayu matsogi",
        english: "free sparring"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "saju",
        english: "four directional"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "hosinsul",
        english: "self-defense"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "tul",
        english: "pattern"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "jirugi",
        english: "punch"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "makgi",
        english: "block"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "chagi",
        english: "kick"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "taerigi",
        english: "strike"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "dung",
        english: "reverse"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "ollyo",
        english: "upward"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "ye ui",
        english: "courtesy"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "yom chi",
        english: "integrity"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "in nae",
        english: "perseverance"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "guk gi",
        english: "self-control"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "baekjul boolgool",
        english: "indomitable spirit"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "son",
        english: "hand"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "joomuk",
        english: "fist"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "apjoomuk",
        english: "forefist"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "palmok",
        english: "forearm"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "an palmok",
        english: "inner forearm"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "bakat palmok",
        english: "outer forearm"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "sonkal",
        english: "knifehand"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "bal",
        english: "foot"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "baldung",
        english: "instep"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "balkal",
        english: "footsword"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "balkal dung",
        english: "inner edge of foot"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "balkut",
        english: "toes"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "kyong gol",
        english: "shin"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "moorup",
        english: "knee"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "apkumchi",
        english: "ball of the foot"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "namcha",
        english: "man, men"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "yocha",
        english: "woman, women"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "sibum",
        english: "demonstration"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "simsa",
        english: "test"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "kyong gi",
        english: "competition"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "chong",
        english: "blue"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "hong",
        english: "red"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "bal gisool",
        english: "foot techniques"
    },
    {
        gup: "10th Gup (White Belt)",
        korean: "son gisool",
        english: "hand techniques"
    },
    {
        gup: "8th Gup (Yellow Belt)",
        korean: "sang",
        english: "twin"
    },
    {
        gup: "8th Gup (Yellow Belt)",
        korean: "daebi",
        english: "guarding"
    },
    {
        gup: "8th Gup (Yellow Belt)",
        korean: "chookyo",
        english: "rising"
    },
    {
        gup: "8th Gup (Yellow Belt)",
        korean: "dollyo",
        english: "turning"
    },
    {
        gup: "7th Gup (Yellow Belt / Green Stripe)",
        korean: "i bo matsogi",
        english: "two step sparring"
    },
    {
        gup: "7th Gup (Yellow Belt / Green Stripe)",
        korean: "tulgi",
        english: "thrust"
    },
    {
        gup: "7th Gup (Yellow Belt / Green Stripe)",
        korean: "noollo",
        english: "pressing"
    },
    {
        gup: "7th Gup (Yellow Belt / Green Stripe)",
        korean: "hechyo",
        english: "wedging"
    },
    {
        gup: "7th Gup (Yellow Belt / Green Stripe)",
        korean: "sun",
        english: "straight"
    },
    {
        gup: "7th Gup (Yellow Belt / Green Stripe)",
        korean: "dung joomuk",
        english: "knuckle side of the fist"
    },
    {
        gup: "7th Gup (Yellow Belt / Green Stripe)",
        korean: "sonkut",
        english: "fingertips"
    },
    {
        gup: "7th Gup (Yellow Belt / Green Stripe)",
        korean: "sun sonkut",
        english: "vertical fingertips"
    },
    {
        gup: "6th Gup (Green Belt)",
        korean: "dwiro",
        english: "backward"
    },
    {
        gup: "6th Gup (Green Belt)",
        korean: "dollmiyo",
        english: "circular"
    }
];