// הוספת אובייקט עם גרסאות בלשון זכר ונקבה לכל הטקסטים שצריכים להשתנות
const genderPhrases = {
    'boys': {
        'recommendationPrefix': 'מומלץ ללבוש',
        'takeSomething': 'קח',
        'takeWater': 'קח בקבוק מים',
        'takeLotOfWater': 'קח הרבה מים',
        'takeUmbrella': 'קח מטריה',
        'checkSportClass': 'שים לב לבדוק שאין שיעור ספורט מחר',
        'attention': 'שים לב',
        'remember': 'זכור'
    },
    'girls': {
        'recommendationPrefix': 'מומלץ ללבוש',
        'takeSomething': 'קחי',
        'takeWater': 'קחי בקבוק מים',
        'takeLotOfWater': 'קחי הרבה מים',
        'takeUmbrella': 'קחי מטריה',
        'checkSportClass': 'שימי לב לבדוק שאין שיעור ספורט מחר',
        'attention': 'שימי לב',
        'remember': 'זכרי'
    }
};

// Weather icons mapping
const weatherIcons = {
    'Clear': '☀️',
    'Clouds': '☁️',
    'Rain': '🌧️',
    'Drizzle': '🌦️',
    'Thunderstorm': '⛈️',
    'Snow': '❄️',
    'Mist': '🌫️',
    'Fog': '🌫️'
};

// Hebrew translations for weather conditions
const weatherTranslations = {
    'Clear': 'בהיר',
    'Clouds': 'מעונן',
    'Rain': 'גשום',
    'Drizzle': 'טפטוף',
    'Thunderstorm': 'סופת רעמים',
    'Snow': 'שלג',
    'Mist': 'ערפל קל',
    'Fog': 'ערפל'
};

// Hebrew names for days of the week
const daysHebrew = {
    'Monday': 'יום שני',
    'Tuesday': 'יום שלישי',
    'Wednesday': 'יום רביעי',
    'Thursday': 'יום חמישי',
    'Friday': 'יום שישי',
    'Saturday': 'שבת',
    'Sunday': 'יום ראשון'
};

// Hebrew names for months
const monthsHebrew = {
    'January': 'ינואר',
    'February': 'פברואר',
    'March': 'מרץ',
    'April': 'אפריל',
    'May': 'מאי',
    'June': 'יוני',
    'July': 'יולי',
    'August': 'אוגוסט',
    'September': 'ספטמבר',
    'October': 'אוקטובר',
    'November': 'נובמבר',
    'December': 'דצמבר'
};

// CSS classes for different clothing items
const clothingItemClasses = {
    // Tops
    'חולצת בית ספר קצרה': 'item-tshirt',
    'חולצת בית ספר עם שרוול ארוך': 'item-shirt',
    'חולצת טי': 'item-tshirt',
    'סוודר': 'item-sweater',
    'סוודר חם': 'item-sweater',
    'קפוצ׳ון': 'item-jacket',
    'מעיל': 'item-coat',
    'מעיל חורף': 'item-coat',
    'מעיל חורף עבה': 'item-coat',
    'מעיל עמיד למים': 'item-coat',
    
    // Bottoms
    'מכנסיים ארוכים': 'item-pants',
    'מכנסיים קצרים': 'item-shorts',
    'מכנסיים ארוכים קלים': 'item-pants',
    'מכנסיים עבים': 'item-pants',
    'חצאית': 'item-skirt',
    'חצאית עם טייץ': 'item-skirt',
    'חצאית עם גרביון': 'item-skirt',
    
    // Accessories
    'כובע': 'item-hat',
    'כובע חם': 'item-hat',
    'כובע שמש': 'item-hat',
    'משקפי שמש': 'item-sunglasses',
    'כפפות': 'item-gloves',
    'כפפות חמות': 'item-gloves',
    
    // Footwear
    'נעליים סגורות': 'item-shoes',
    'נעליים קלות': 'item-shoes',
    'מגפיים': 'item-boots',
    'מגפיים חמים': 'item-boots',
    'סנדלים': 'item-sandals',
    
    // Weather-specific items
    'מטריה': 'item-umbrella',
    'מטריה קטנה': 'item-umbrella',
    'מטריה חזקה': 'item-umbrella',
    
    // School items
    'תיק': 'item-bag',
    'תיק עם ספרים': 'item-bag',
    'בקבוק מים': 'item-water',
    'בקבוק מים גדול': 'item-water',
    'קלמר': 'item-pencil',
    'קרם הגנה': 'item-sunscreen',
    'שקית ניילון': 'item-bag',
    'ארוחת 10': 'item-food'
};

// Clothing recommendations based on temperature and gender
const clothingRules = {
    'very_cold': {  // Below 0°C
        'tops': [
            'חולצת בית ספר עם שרוול ארוך',
            'סוודר חם',
            'מעיל חורף עבה'
        ],
        'bottoms': {
            'boys': [
                'מכנסיים ארוכים עבים',
                'טייץ תרמי מתחת למכנסיים'
            ],
            'girls': [
                'מכנסיים ארוכים עבים',
                'חצאית עם גרביון עבה',
                'טייץ תרמי מתחת למכנסיים או חצאית'
            ]
        },
        'accessories': [
            'כפפות חמות'
        ],
        'footwear': [
            'נעליים סגורות עם גרביים עבות'
        ],
        'school_items': [
            'תיק עם ספרים לפי מערכת',
            'בקבוק מים',
            'קלמר עם כל הציוד',
            'ארוחת 10'
        ]
    },
    'cold': {  // 0-10°C
        'tops': [
            'חולצת בית ספר עם שרוול ארוך',
            'סוודר',
            'מעיל חורף'
        ],
        'bottoms': {
            'boys': [
                'מכנסיים ארוכים'
            ],
            'girls': [
                'מכנסיים ארוכים',
                'חצאית עם גרביון עבה'
            ]
        },
        'accessories': [],
        'footwear': [
            'נעליים סגורות'
        ],
        'school_items': [
            'תיק עם ספרים לפי מערכת',
            'בקבוק מים',
            'קלמר עם כל הציוד',
            'ארוחת 10'
        ]
    },
    'cool': {  // 10-18°C
        'tops': [
            'חולצת בית ספר עם שרוול ארוך',
            'סווטשירט או קפוצ׳ון קל'
        ],
        'bottoms': {
            'boys': [
                'מכנסיים ארוכים'
            ],
            'girls': [
                'מכנסיים ארוכים',
                'חצאית עם גרביון או טייץ'
            ]
        },
        'accessories': [],
        'footwear': [
            'נעליים סגורות'
        ],
        'school_items': [
            'תיק עם ספרים לפי מערכת',
            'בקבוק מים',
            'קלמר עם כל הציוד',
            'ארוחת 10'
        ]
    },
    'mild': {  // 18-24°C
        'tops': [
            'חולצת בית ספר קצרה',
            'קפוצ׳ון או סווטשירט דק (למקרה שיהיה קריר)'
        ],
        'bottoms': {
            'boys': [
                'מכנסיים ארוכים קלים'
            ],
            'girls': [
                'מכנסיים ארוכים קלים',
                'חצאית עם טייץ דק'
            ]
        },
        'accessories': [],
        'footwear': [
            'נעליים סגורות'
        ],
        'school_items': [
            'תיק עם ספרים לפי מערכת',
            'בקבוק מים',
            'קלמר עם כל הציוד',
            'ארוחת 10'
        ]
    },
    'warm': {  // 24-29°C
        'tops': [
            'חולצת בית ספר קצרה'
        ],
        'bottoms': {
            'boys': [
                'מכנסיים קצרים (אם מותר בבית הספר)',
                'מכנסיים ארוכים קלים'
            ],
            'girls': [
                'מכנסיים קצרים (אם מותר בבית הספר)',
                'מכנסיים ארוכים קלים',
                'חצאית'
            ]
        },
        'accessories': [
            'כובע שמש'
        ],
        'footwear': [
            'נעליים סגורות'
        ],
        'school_items': [
            'תיק עם ספרים לפי מערכת',
            'בקבוק מים גדול',
            'קלמר עם כל הציוד',
            'ארוחת 10'
        ]
    },
    'hot': {  // Above 29°C
        'tops': [
            'חולצת בית ספר קצרה וקלה'
        ],
        'bottoms': {
            'boys': [
                'מכנסיים קצרים (אם מותר בבית הספר)',
                'מכנסיים ארוכים קלים מאוד'
            ],
            'girls': [
                'מכנסיים קצרים (אם מותר בבית הספר)',
                'מכנסיים ארוכים קלים מאוד',
                'חצאית'
            ]
        },
        'accessories': [
            'כובע שמש'
        ],
        'footwear': [
            'סנדלים - שים/י לב לבדוק שאין שיעור ספורט מחר!'
        ],
        'school_items': [
            'תיק עם ספרים לפי מערכת',
            'בקבוק מים גדול (לפחות ליטר)',
            'קלמר עם כל הציוד',
            'ארוחת 10'
        ]
    }
};

// Weather condition specific recommendations for kids
const weatherConditionItems = {
    'Rain': {
        'title': 'בגלל שיהיה גשום:',
        'items': [
            'מטריה',
            'מעיל עמיד למים',
            'שקית ניילון לתיק (כדי שהספרים לא יירטבו)'
        ]
    },
    'Drizzle': {
        'title': 'בגלל שיהיה טפטוף:',
        'items': [
            'מטריה קטנה',
            'מעיל עמיד למים'
        ]
    },
    'Thunderstorm': {
        'title': 'בגלל שתהיה סופת רעמים:',
        'items': [
            'מטריה חזקה',
            'מעיל עמיד למים',
            'שקית ניילון לתיק (כדי שהספרים לא יירטבו)'
        ]
    },
    'Snow': {
        'title': 'בגלל שיהיה שלג:',
        'items': [
            'כפפות חמות',
            'שקית ניילון לתיק (כדי שהספרים לא יירטבו)'
        ]
    },
    'Mist': {
        'title': 'בגלל שיהיה ערפל:',
        'items': [
            'בגדים בצבעים בהירים (כדי שיראו אותך טוב)',
            'מעיל קל'
        ]
    },
    'Fog': {
        'title': 'בגלל שיהיה ערפל סמיך:',
        'items': [
            'בגדים בצבעים בהירים (כדי שיראו אותך טוב)',
            'פנס קטן (אם יוצאים מוקדם בבוקר)'
        ]
    },
    'Clear': {
        'title': 'בגלל שיהיה יום שמש:',
        'items': [
            'קרם הגנה',
            'משקפי שמש'
        ]
    }
};

// עדכון mainRecommendations לשימוש בטקסטים לפי מגדר
const mainRecommendations = {
    'Rain': {
        'cold': (gender) => `${genderPhrases[gender].recommendationPrefix} בגדים חמים ול${genderPhrases[gender].takeUmbrella}!`,
        'cool': (gender) => `${genderPhrases[gender].recommendationPrefix} שכבות ול${genderPhrases[gender].takeUmbrella}!`,
        'mild': (gender) => `${genderPhrases[gender].recommendationPrefix} בגדים עם שרוול ארוך ול${genderPhrases[gender].takeUmbrella}!`,
        'warm': (gender) => `${genderPhrases[gender].recommendationPrefix} חולצה קצרה ול${genderPhrases[gender].takeUmbrella}!`
    },
    'Thunderstorm': {
        'cold': (gender) => `${genderPhrases[gender].recommendationPrefix} בגדים חמים ול${genderPhrases[gender].takeSomething} מטריה חזקה!`,
        'cool': (gender) => `${genderPhrases[gender].recommendationPrefix} שכבות ול${genderPhrases[gender].takeSomething} מטריה חזקה!`,
        'mild': (gender) => `${genderPhrases[gender].recommendationPrefix} בגדים עם שרוול ארוך ול${genderPhrases[gender].takeSomething} מטריה חזקה!`,
        'warm': (gender) => `${genderPhrases[gender].recommendationPrefix} חולצה קצרה ול${genderPhrases[gender].takeSomething} מטריה חזקה!`
    },
    'Drizzle': {
        'cold': (gender) => `${genderPhrases[gender].recommendationPrefix} בגדים חמים ול${genderPhrases[gender].takeSomething} מטריה קטנה!`,
        'cool': (gender) => `${genderPhrases[gender].recommendationPrefix} שכבות ול${genderPhrases[gender].takeSomething} מטריה קטנה!`,
        'mild': (gender) => `${genderPhrases[gender].recommendationPrefix} בגדים עם שרוול ארוך ול${genderPhrases[gender].takeSomething} מטריה קטנה!`,
        'warm': (gender) => `${genderPhrases[gender].recommendationPrefix} חולצה קצרה ול${genderPhrases[gender].takeSomething} מטריה קטנה!`
    },
    'Snow': {
        'cold': (gender) => `${genderPhrases[gender].recommendationPrefix} בגדים חמים במיוחד ומגפיים!`,
        'cool': (gender) => `${genderPhrases[gender].recommendationPrefix} בגדים חמים במיוחד ומגפיים!`
    },
    'Clear': {
        'very_cold': (gender) => `${genderPhrases[gender].recommendationPrefix} בגדים חמים מאוד! יהיה קר מחר.`,
        'cold': (gender) => `${genderPhrases[gender].recommendationPrefix} בגדים חמים! יהיה קר מחר.`,
        'cool': (gender) => `${genderPhrases[gender].recommendationPrefix} שכבות! יהיה קריר מחר.`,
        'mild': (gender) => `${genderPhrases[gender].recommendationPrefix} חולצה קלה עם שרוול!`,
        'warm': (gender) => `${genderPhrases[gender].recommendationPrefix} חולצה קצרה ו${genderPhrases[gender].takeWater}!`,
        'hot': (gender) => `${genderPhrases[gender].recommendationPrefix} בגדים קלים ו${genderPhrases[gender].takeLotOfWater}!`
    },
    'Clouds': {
        'very_cold': (gender) => `${genderPhrases[gender].recommendationPrefix} בגדים חמים מאוד! יהיה קר ומעונן.`,
        'cold': (gender) => `${genderPhrases[gender].recommendationPrefix} בגדים חמים! יהיה קר ומעונן.`,
        'cool': (gender) => `${genderPhrases[gender].recommendationPrefix} שכבות! יהיה קריר ומעונן.`,
        'mild': (gender) => `${genderPhrases[gender].recommendationPrefix} חולצה עם שרוול! יהיה מעונן.`,
        'warm': (gender) => `${genderPhrases[gender].recommendationPrefix} חולצה קצרה! יהיה חם ומעונן.`,
        'hot': (gender) => `${genderPhrases[gender].recommendationPrefix} בגדים קלים! יהיה חם ומעונן.`
    }
};

// עדכון defaultMainRecommendations 
const defaultMainRecommendations = {
    'very_cold': (gender) => `${genderPhrases[gender].recommendationPrefix} בגדים חמים מאוד!`,
    'cold': (gender) => `${genderPhrases[gender].recommendationPrefix} בגדים חמים!`,
    'cool': (gender) => `${genderPhrases[gender].recommendationPrefix} שכבות! יהיה קריר.`,
    'mild': (gender) => `${genderPhrases[gender].recommendationPrefix} חולצה עם שרוול!`,
    'warm': (gender) => `${genderPhrases[gender].recommendationPrefix} חולצה קצרה ו${genderPhrases[gender].takeWater}!`,
    'hot': (gender) => `${genderPhrases[gender].recommendationPrefix} בגדים קלים ו${genderPhrases[gender].takeLotOfWater}!`
};

// מערך עובדות מעניינות על מזג אוויר ולבוש
const weatherFacts = [
    "הגוף שלנו מפיק חום כשקר לנו, ולכן שכבות רבות של בגדים שומרות על חום הגוף טוב יותר מבגד עבה אחד!",
    "האם ידעתם שהתלבושת האחידה לבית הספר הומצאה באנגליה לפני יותר מ-500 שנה?",
    "ביום חם, בגדים בצבע לבן הם הכי טובים כי הם מחזירים את קרני השמש!",
    "הידעתם? ענן גשם טיפוסי שוקל בערך כמו 100 פילים!",
    "הצבע הכחול של השמיים נוצר כתוצאה מפיזור האור של השמש באטמוספירה.",
    "בסופת ברקים, אם אתם סופרים את השניות בין הברק לרעם וחלקו ב-3, תקבלו את המרחק בקילומטרים!",
    "לפני המצאת מד-הטמפרטורה, אנשים הגדירו את הטמפרטורה לפי כמה צרצרים מצייצים בדקה!",
    "כשיורד שלג, כל פתית שלג הוא בעל צורה ייחודית - אין שני פתיתים זהים!",
    "השמש מחממת את האוויר ליד פני הקרקע, והאוויר החם עולה למעלה, וכך נוצרת הרוח.",
    "ביום גשום, הצבע האדום של מטריה נראה למרחק הגדול ביותר!",
    "בקיץ, אם אתה שותה מספיק מים, הגוף שומר על טמפרטורה קבועה של 37 מעלות, גם כשבחוץ חם מאוד.",
    "הידעת? בחורף, אנחנו מאבדים כ-30% מחום הגוף דרך הראש אם הוא לא מכוסה!",
    "ביום קר, מומלץ לשתות משקאות חמים, אבל לא רותחים - הם עוזרים לגוף לשמור על חום.",
    "האם ידעתם שיש לנו יותר תאי הזעה (כ-3 מיליון) מאשר תאים שחשים את הקור?",
    "בזמן גשם, האדמה משחררת ריח מיוחד שנקרא 'פטריקור' שרבים אוהבים.",
    "הידעת? הרוח החזקה ביותר שנמדדה אי פעם הייתה במהירות של 408 קמ״ש!",
    "בגדים עם כיסים רבים הומצאו במקור עבור חיילים שהיו צריכים לשאת ציוד רב.",
    "הידעת? אם לובשים גרביים לפני השינה בלילה קר, הגוף מתחמם מהר יותר!",
    "בחורף, אם אתה לובש בגדים בשכבות, אתה יכול להסיר שכבה כשנעשה חם ולהוסיף כשקר."
];

// OpenWeatherMap API key
const apiKey = "64319aab490fe096e4759d3f342c1d2e";

// שימוש בשם משתנה שונה מ-location (שהוא מובנה בדפדפן)
const cityLocation = "Mazkeret Batya,IL";

// DOM elements
let loadingElement, resultElement, errorElement, dateElement, weatherIconElement, 
    weatherDescElement, temperatureElement, weatherInfoElement, weatherReminderElement,
    weatherChangesContainer, weatherChangesList,
    updateTimeElement, clothingContainer, mainRecommendationElement,
    dayIndicatorElement, sunsetTimeElement, weatherTitleElement,
    speakButton, factContentElement, factButton, themeToggle, genderToggle;

// הגדרת כל אלמנטי ה-DOM כשהדף נטען
function initDOMElements() {
    loadingElement = document.getElementById('loading');
    resultElement = document.getElementById('result');
    errorElement = document.getElementById('error');
    dateElement = document.getElementById('date');
    weatherIconElement = document.getElementById('weather-icon');
    weatherDescElement = document.getElementById('weather-desc');
    temperatureElement = document.getElementById('temperature');
    weatherInfoElement = document.getElementById('weather-info');
    weatherReminderElement = document.getElementById('weather-reminder');
    weatherChangesContainer = document.getElementById('weather-changes');
    weatherChangesList = document.getElementById('weather-changes-list');
    updateTimeElement = document.getElementById('update-time');
    clothingContainer = document.getElementById('clothing-container');
    mainRecommendationElement = document.getElementById('main-recommendation');
    dayIndicatorElement = document.getElementById('day-indicator');
    sunsetTimeElement = document.getElementById('sunset-time');
    weatherTitleElement = document.getElementById('weather-title');
    speakButton = document.getElementById('speak-button');
    factContentElement = document.getElementById('fact-content');
    factButton = document.getElementById('fact-button');
    themeToggle = document.getElementById('theme-toggle');
    genderToggle = document.getElementById('gender-toggle');

}

// Gender for clothing recommendations (can be switched by user preference)
let selectedGender = 'boys'; // Default to boys

// Function to toggle dark/light theme
function toggleTheme() {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌓';
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    }
}

// עדכון של toggleGender כדי לכלול גם את שינויי הלשון
function toggleGender() {
    if (selectedGender === 'boys') {
        selectedGender = 'girls';
        localStorage.setItem('gender', 'girls');
        genderToggle.textContent = '👧';
    } else {
        selectedGender = 'boys';
        localStorage.setItem('gender', 'boys');
        genderToggle.textContent = '👦';
    }
    
    // רענון המלצות הלבוש
    const tempCategory = getTemperatureCategory(parseFloat(temperatureElement.textContent));
    const clothing = JSON.parse(JSON.stringify(clothingRules[tempCategory]));
    
    // עדכון ההמלצה הראשית
    const condition = weatherDescElement.textContent;
    let mainCondition = 'Clear'; // ברירת מחדל
    
    // מצא את תנאי מזג האוויר המתאים
    for (const [englishDesc, hebrewDesc] of Object.entries(weatherTranslations)) {
        if (hebrewDesc === condition) {
            mainCondition = englishDesc;
            break;
        }
    }
    
    // עדכון המלצה ראשית
    const mainRecommendation = getMainRecommendation(mainCondition, tempCategory, selectedGender);
    mainRecommendationElement.textContent = mainRecommendation;
    
    // עדכון מלל לפי מגדר
    updateTextsForGender();
    
    // עדכון תצוגת קטגוריות הבגדים
    displayClothingCategories(clothing);
}

// פונקציה חדשה שמעדכנת את כל הטקסטים המגדריים
function updateTextsForGender() {
    // עדכון הודעת תזכורת מים
    if (weatherReminderElement.style.display !== 'none') {
        weatherReminderElement.innerHTML = `<span style="font-size:1.3rem; margin-left: 10px;">💧</span> ${genderPhrases[selectedGender].remember} לשתות הרבה מים מחר!`;
    }
    
    // עדכון טקסטים מגדריים אחרים באפליקציה
    // לדוגמה, בהודעות שגיאה, ביום השבוע וכדומה
    
    const dayOfWeek = new Date().getDay() + 1; // מחר
    if (dayOfWeek === 5) { // Friday
        dayIndicatorElement.textContent = `${genderPhrases[selectedGender].attention}: מחר יום שישי! יום לימודים קצר`;
    } else if (dayOfWeek === 0) { // Sunday
        dayIndicatorElement.textContent = `${genderPhrases[selectedGender].attention}: מחר יום ראשון! תחילת שבוע חדש`;
    }
}

// Initialize theme from localStorage
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }
}

// Initialize gender from localStorage
function initGender() {
    const savedGender = localStorage.getItem('gender');
    if (savedGender) {
        selectedGender = savedGender;
        // עדכון טקסט הכפתור בהתאם למגדר שנשמר
        if (genderToggle) {
            genderToggle.textContent = selectedGender === 'boys' ? '👦' : '👧';
        }
    }
}

// Function to speak text using SpeechSynthesis
function speakText(text) {
    if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'he-IL'; // Hebrew language
        utterance.rate = 0.9; // Slightly slower rate for clarity
        
        window.speechSynthesis.speak(utterance);
    } else {
        alert('לצערנו, הדפדפן שלך לא תומך בהקראה.');
    }
}

// Function to show a random weather fact
function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * weatherFacts.length);
    factContentElement.classList.remove('fade-in');
    
    // Trigger reflow to restart animation
    void factContentElement.offsetWidth;
    
    factContentElement.textContent = weatherFacts[randomIndex];
    factContentElement.classList.add('fade-in');
}

// פונקציה שמחזירה תווית זמן ידידותית בעברית
function getTimeLabel(hour) {
    if (hour >= 7 && hour <= 9) {
        return "בבוקר";
    } else if (hour >= 10 && hour <= 12) {
        return "לפני הצהריים";
    } else if (hour >= 13 && hour <= 14) {
        return "בצהריים";
    } else if (hour >= 15 && hour <= 18) {
        return "אחה״צ";
    } else {
        return "בערב";
    }
}

// פונקציה שמזהה שינויים משמעותיים במזג האוויר ביחס לממוצע
function detectWeatherChanges(forecasts, avgTemp) {
    // מסנן רק את התחזיות לשעות בית הספר (8:00-16:00)
    const schoolHoursForecasts = forecasts.filter(forecast => {
        const hour = new Date(forecast.dt * 1000).getHours();
        return hour >= 8 && hour <= 16;
    });
    
    // אם אין מספיק נתונים, מחזיר רשימה ריקה
    if (schoolHoursForecasts.length < 2) {
        return [];
    }
    
    const changes = [];
    
    // בדיקת שינויי טמפרטורה משמעותיים ביחס לממוצע
    schoolHoursForecasts.forEach(forecast => {
        const forecastTemp = forecast.main.temp;
        const tempDiff = forecastTemp - avgTemp;
        const forecastHour = new Date(forecast.dt * 1000).getHours();
        
        // זיהוי שינוי טמפרטורה משמעותי (מעל 5 מעלות מהממוצע)
        if (Math.abs(tempDiff) >= 5) {
            const timeLabel = getTimeLabel(forecastHour);
            
            if (tempDiff > 0) {
                changes.push({
                    type: 'temperature-up',
                    icon: '🌡️',
                    time: timeLabel,
                    text: `יתחמם ל-${Math.round(forecastTemp)}°C (${Math.round(tempDiff)}+ מעלות מהממוצע)`,
                    class: 'change-temperature-up'
                });
            } else {
                changes.push({
                    type: 'temperature-down',
                    icon: '🌡️',
                    time: timeLabel,
                    text: `יתקרר ל-${Math.round(forecastTemp)}°C (${Math.abs(Math.round(tempDiff))}– מעלות מהממוצע)`,
                    class: 'change-temperature-down'
                });
            }
        }
    });
    
    // בדיקת שינויי מזג אוויר (גשם, שלג וכו')
    for (let i = 1; i < schoolHoursForecasts.length; i++) {
        const prevForecast = schoolHoursForecasts[i-1];
        const currentForecast = schoolHoursForecasts[i];
        
        const prevWeather = prevForecast.weather[0].main;
        const currentWeather = currentForecast.weather[0].main;
        const currentHour = new Date(currentForecast.dt * 1000).getHours();
        
        const isRainyWeather = weather => ['Rain', 'Drizzle', 'Thunderstorm'].includes(weather);
        
        // זיהוי תחילת גשם
        if (!isRainyWeather(prevWeather) && isRainyWeather(currentWeather)) {
            changes.push({
                type: 'rain-start',
                icon: '🌧️',
                time: getTimeLabel(currentHour),
                text: `צפוי להתחיל גשם בסביבות השעה ${currentHour}:00`,
                class: 'change-rain-start'
            });
        } 
        // זיהוי סיום גשם
        else if (isRainyWeather(prevWeather) && !isRainyWeather(currentWeather)) {
            changes.push({
                type: 'rain-end',
                icon: '🌦️',
                time: getTimeLabel(currentHour),
                text: `הגשם צפוי להיפסק בסביבות השעה ${currentHour}:00`,
                class: 'change-rain-end'
            });
        }
        
        // זיהוי תחילת שלג
        if (prevWeather !== 'Snow' && currentWeather === 'Snow') {
            changes.push({
                type: 'snow-start',
                icon: '❄️',
                time: getTimeLabel(currentHour),
                text: `צפוי להתחיל שלג בסביבות השעה ${currentHour}:00`,
                class: 'change-rain-start'
            });
        }
    }
    
    return changes;
}

// פונקציה להשוואת הטמפרטורה של מחר לטמפרטורה של היום
function compareTemperatures(tomorrowTemp, todayTemp) {
    const diff = Math.round(tomorrowTemp - todayTemp);
    
    if (Math.abs(diff) < 2) {
        return "מזג האוויר מחר יהיה דומה להיום";
    } else if (diff > 0) {
        return `מחר יהיה חם יותר מהיום ב-${diff} מעלות`;
    } else {
        return `מחר יהיה קריר יותר מהיום ב-${Math.abs(diff)} מעלות`;
    }
}

// פונקציה להמרת שעה מפורמט Unix Timestamp לפורמט של שעה:דקות
function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

// קבלת תחזית מזג האוויר מה-API
function getWeatherForecast() {
    // הקורא להשוואה בין היום ומחר, נקבל גם את תחזית היום
    const todayUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityLocation}&appid=${apiKey}&units=metric`;
    
    // לקבלת תחזית ל-5 ימים, כולל מחר (cnt=40 מבטיח שיהיו מספיק נתונים)
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityLocation}&appid=${apiKey}&units=metric&cnt=40`;
    
    // Show loading, hide results and error
    loadingElement.style.display = 'block';
    resultElement.style.display = 'none';
    errorElement.style.display = 'none';
    
    // Fetch both today's and forecast data
    Promise.all([
        fetch(todayUrl).then(response => {
            if (!response.ok) throw new Error('Error fetching today\'s weather');
            return response.json();
        }),
        fetch(forecastUrl).then(response => {
            if (!response.ok) throw new Error('Error fetching forecast');
            return response.json();
        })
    ])
    .then(([todayData, forecastData]) => {
        // Extract today's temperature and city name
        const todayTemp = todayData.main.temp;
        const cityName = todayData.name;
        const sunsetTime = formatTime(todayData.sys.sunset);
        
        // הוספת מיפוי שמות ערים לעברית
        const cityNameHebrew = getCityNameInHebrew(cityName);
        
        // חישוב מחר
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowDateStr = tomorrow.toISOString().split('T')[0];
        
        // סינון כל תחזיות מחר
        const tomorrowForecasts = forecastData.list.filter(item => 
            item.dt_txt.startsWith(tomorrowDateStr)
        );
        
        // בדיקה אם יש לנו תחזיות למחר
        if (tomorrowForecasts.length === 0) {
            throw new Error('לא נמצאו תחזיות למחר');
        }
        
        // חישוב טמפרטורה ממוצעת לשעות היום (8:00-16:00) - שעות בית הספר
        const schoolHoursForecasts = tomorrowForecasts.filter(forecast => {
            const hour = new Date(forecast.dt * 1000).getHours();
            return hour >= 8 && hour <= 16;
        });
        
        // אם אין תחזיות לשעות בית הספר, נשתמש בכל התחזיות של מחר
        const forecasts = schoolHoursForecasts.length > 0 ? schoolHoursForecasts : tomorrowForecasts;
        
        // חישוב ממוצע טמפרטורה
        const sumTemp = forecasts.reduce((sum, forecast) => sum + forecast.main.temp, 0);
        const avgTemp = sumTemp / forecasts.length;
        
        // מצא את הטמפרטורה המינימלית והמקסימלית
        const minTemp = Math.min(...forecasts.map(forecast => forecast.main.temp_min));
        const maxTemp = Math.max(...forecasts.map(forecast => forecast.main.temp_max));
        
        // קביעת תנאי מזג האוויר העיקרי (לוקח את השכיח ביותר)
        const conditionCounts = {};
        forecasts.forEach(forecast => {
            const condition = forecast.weather[0].main;
            conditionCounts[condition] = (conditionCounts[condition] || 0) + 1;
        });
        
        let mainCondition = forecasts[0].weather[0].main; // ברירת מחדל
        let maxCount = 0;
        
        Object.entries(conditionCounts).forEach(([condition, count]) => {
            if (count > maxCount) {
                maxCount = count;
                mainCondition = condition;
            }
        });
        
        // יצירת אובייקט מידע מזג אוויר
        const weatherInfo = {
            avgTemp: avgTemp,
            minTemp: minTemp,
            maxTemp: maxTemp,
            condition: mainCondition,
            description: forecasts[0].weather[0].description,
            tomorrow: tomorrow,
            todayTemp: todayTemp,
            cityName: cityName,
            cityNameHebrew: cityNameHebrew,
            sunsetTime: sunsetTime
        };
        
        // עדכון כותרת הדף לכלול את שם העיר בעברית
        document.title = `מה ללבוש לבית הספר מחר? - ${cityNameHebrew}`;
        
        // עדכון כותרת מזג האוויר לכלול את שם העיר בעברית
        weatherTitleElement.textContent = `מה ללבוש לבית הספר מחר ב${cityNameHebrew}?`;
        
        // Display the results
        displayResults(forecastData.city, weatherInfo, tomorrowForecasts);
    })
    .catch(error => {
        console.error('Error:', error);
        loadingElement.style.display = 'none';
        errorElement.style.display = 'block';
    });
}

// פונקציה להמרת שם עיר מאנגלית לעברית
function getCityNameInHebrew(englishName) {
    const cityTranslations = {
        'Mazkeret Batya': 'מזכרת בתיה',
        'Tel Aviv': 'תל אביב',
        'Jerusalem': 'ירושלים',
        'Haifa': 'חיפה',
        'Beersheba': 'באר שבע',
        'Eilat': 'אילת',
        'Netanya': 'נתניה',
        'Ashdod': 'אשדוד',
        'Ashkelon': 'אשקלון',
        'Tiberias': 'טבריה',
        'Nazareth': 'נצרת',
        'Herzliya': 'הרצליה',
        'Kfar Saba': 'כפר סבא',
        'Ramat Gan': 'רמת גן',
        'Rehovot': 'רחובות',
        'Bat Yam': 'בת ים',
        'Holon': 'חולון',
        'Petah Tikva': 'פתח תקווה',
        'Rishon LeZion': 'ראשון לציון',
        'Ramla': 'רמלה',
        'Lod': 'לוד'
    };
    
    return cityTranslations[englishName] || englishName;
}

// קביעת קטגוריית הטמפרטורה לפי ערך מספרי
function getTemperatureCategory(temp) {
    if (temp < 0) return 'very_cold';
    if (temp < 10) return 'cold';
    if (temp < 18) return 'cool';
    if (temp < 24) return 'mild';
    if (temp < 29) return 'warm';
    return 'hot';
}

// עדכון פונקציית getMainRecommendation
function getMainRecommendation(condition, tempCategory, gender) {
    // בדיקה אם יש המלצה ספציפית למזג האוויר והטמפרטורה
    if (mainRecommendations[condition] && mainRecommendations[condition][tempCategory]) {
        return mainRecommendations[condition][tempCategory](gender);
    }
    
    // אם לא, נחזיר המלצה כללית לפי טמפרטורה
    return defaultMainRecommendations[tempCategory](gender);
}

// עדכון פונקציית displayClothingCategories כדי לטפל בכפילויות פריטי לבוש
function displayClothingCategories(clothing) {
    const categories = [
        { name: 'חלק עליון', items: clothing.tops, id: 'tops' },
        { name: 'חלק תחתון', items: clothing.bottoms, id: 'bottoms' },
        { name: 'אביזרים', items: clothing.accessories, id: 'accessories' },
        { name: 'הנעלה', items: clothing.footwear, id: 'footwear' },
        { name: 'ציוד לבית ספר', items: clothing.school_items, id: 'school_items' }
    ];
    
    // נקה את המכיל הקיים
    clothingContainer.innerHTML = '';
    
    // הצג רק קטגוריות עם פריטים
    categories.forEach(category => {
        if (category.items && (Array.isArray(category.items) ? category.items.length > 0 : Object.keys(category.items).length > 0)) {
            const section = document.createElement('div');
            section.className = 'clothing-section';
            
            const heading = document.createElement('h3');
            heading.textContent = category.name;
            
            const list = document.createElement('ul');
            list.className = 'clothing-list';
            list.id = category.id;
            
            // בדיקה אם יש תת-קטגוריות לפי מגדר
            if (category.id === 'bottoms' && typeof category.items === 'object' && !Array.isArray(category.items)) {
                // השתמש בקטגוריה המגדרית הנבחרת
                const genderItems = category.items[selectedGender] || [];
                
                // מסנן פריטים כפולים לבנות - עדיפות לחצאית על מכנסיים בסגנון דומה
                let filteredItems = genderItems;
                if (selectedGender === 'girls') {
                    // קבע אילו פריטים להציג
                    const hasSkirt = genderItems.some(item => item.includes('חצאית'));
                    
                    if (hasSkirt) {
                        // אם יש חצאית, לא מציג מכנסיים רגילים אבל כן מציג מכנסיים קצרים או מיוחדים
                        filteredItems = genderItems.filter(item => {
                            // שמור חצאית תמיד
                            if (item.includes('חצאית')) return true;
                            // שמור מכנסיים קצרים תמיד
                            if (item.includes('מכנסיים קצרים')) return true;
                            // סנן מכנסיים רגילים אם יש חצאית
                            if (item.includes('מכנסיים ארוכים') && !item.includes('מיוחדים')) return false;
                            return true;
                        });
                    }
                }
                
                filteredItems.forEach(item => {
                    const li = document.createElement('li');
                    
                    // הוסף מחלקת CSS לפי סוג הפריט
                    for (const [itemText, className] of Object.entries(clothingItemClasses)) {
                        if (item.includes(itemText)) {
                            li.className = className;
                            break;
                        }
                    }
                    
                    li.textContent = item;
                    list.appendChild(li);
                });
            } else if (Array.isArray(category.items)) {
                // רשימה רגילה של פריטים
                category.items.forEach(item => {
                    const li = document.createElement('li');
                    
                    // הוסף מחלקת CSS לפי סוג הפריט
                    for (const [itemText, className] of Object.entries(clothingItemClasses)) {
                        if (item.includes(itemText)) {
                            li.className = className;
                            break;
                        }
                    }
                    
                    li.textContent = item;
                    list.appendChild(li);
                });
            }
            
            section.appendChild(heading);
            section.appendChild(list);
            clothingContainer.appendChild(section);
        }
    });
}

// עיצוב ותצוגת התוצאות
function displayResults(cityInfo, weatherInfo, hourlyForecasts) {
    // Format the date in Hebrew
    const tomorrow = weatherInfo.tomorrow;
    const dayName = daysHebrew[tomorrow.toLocaleDateString('en-US', { weekday: 'long' })];
    const monthName = monthsHebrew[tomorrow.toLocaleDateString('en-US', { month: 'long' })];
    const dateNum = tomorrow.getDate();
    const formattedDate = `${dayName}, ${dateNum} ${monthName}`;
    
    // Get the weather icon and translation
    const weatherIcon = weatherIcons[weatherInfo.condition] || '🌦️';
    const weatherDesc = weatherTranslations[weatherInfo.condition] || weatherInfo.condition;
    
    // Round the temperature
    const temp = Math.round(weatherInfo.avgTemp);
    
    // Get temperature category
    const tempCategory = getTemperatureCategory(temp);
    
    // Get clothing recommendations based on temperature
    const clothing = JSON.parse(JSON.stringify(clothingRules[tempCategory])); // Deep copy to avoid modifying the original
    
    // Override footwear recommendation based on weather condition
    if (['Rain', 'Thunderstorm', 'Drizzle'].includes(weatherInfo.condition)) {
        clothing.footwear = ['מגפיים - שים/י לב לבדוק שאין שיעור ספורט מחר!'];
    } else if (weatherInfo.condition === 'Snow') {
        clothing.footwear = ['מגפיים חמים - שים/י לב לבדוק שאין שיעור ספורט מחר!'];
    } else if (temp >= 29) { // Hot weather
        clothing.footwear = ['סנדלים - שים/י לב לבדוק שאין שיעור ספורט מחר!'];
    }
    
    // Show water reminder for hot days
    if (temp >= 25) {
        weatherReminderElement.style.display = 'block';
    } else {
        weatherReminderElement.style.display = 'none';
    }
    
    // Set main recommendation - להעביר את המגדר הנבחר
    const mainRecommendation = getMainRecommendation(weatherInfo.condition, tempCategory, selectedGender);
    mainRecommendationElement.textContent = mainRecommendation;
    
    // Set the day indicator for Friday or Sunday
    const dayOfWeek = tomorrow.getDay();
    if (dayOfWeek === 5) { // Friday
        dayIndicatorElement.textContent = 'שים לב: מחר יום שישי! יום לימודים קצר';
        dayIndicatorElement.className = 'day-indicator visible';
    } else if (dayOfWeek === 0) { // Sunday
        dayIndicatorElement.textContent = 'שים לב: מחר יום ראשון! תחילת שבוע חדש';
        dayIndicatorElement.className = 'day-indicator visible';
    } else {
        dayIndicatorElement.className = 'day-indicator';
    }
    
    // Set sunset time
    sunsetTimeElement.textContent = weatherInfo.sunsetTime || '18:00';
    
    // הגדרת מחלקת רקע לפי מזג האוויר
    weatherInfoElement.className = 'weather-info.' + weatherInfo.condition.toLowerCase();
    
    
// זיהוי והצגת שינויי מזג אוויר - נעביר גם את הטמפרטורה הממוצעת
const weatherChanges = detectWeatherChanges(hourlyForecasts, temp);

if (weatherChanges.length > 0) {
    // יש שינויים משמעותיים - נציג אותם
    weatherChangesList.innerHTML = '';
    
    weatherChanges.forEach(change => {
        const listItem = document.createElement('li');
        listItem.className = 'weather-changes-item';
        
        const iconSpan = document.createElement('span');
        iconSpan.className = 'weather-changes-icon';
        iconSpan.textContent = change.icon;
        
        const timeSpan = document.createElement('span');
        timeSpan.className = 'weather-changes-time';
        timeSpan.textContent = change.time + ':';
        
        const textSpan = document.createElement('span');
        textSpan.className = `weather-changes-text ${change.class}`;
        textSpan.textContent = change.text;
        
        listItem.appendChild(iconSpan);
        listItem.appendChild(timeSpan);
        listItem.appendChild(textSpan);
        
        weatherChangesList.appendChild(listItem);
    });
    
    weatherChangesContainer.style.display = 'block';
} else {
    // אין שינויים משמעותיים - נסתיר את האזור
    weatherChangesContainer.style.display = 'none';
}
    
    // Update the DOM for basic weather info
    dateElement.textContent = formattedDate;
    weatherIconElement.textContent = weatherIcon;
    weatherDescElement.textContent = weatherDesc;
    temperatureElement.textContent = `${temp}°C`;
    
    // הצג קטגוריות לבוש כאשר מסננים את הריקות
    displayClothingCategories(clothing);
    

    
    // Update last updated time
    const now = new Date();
    const day = now.getDate();
    const month = monthsHebrew[now.toLocaleDateString('en-US', { month: 'long' })];
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    updateTimeElement.textContent = `עודכן לאחרונה: ${day} ${month}, ${hours}:${minutes}`;
    
    // Show random weather fact
    showRandomFact();
    
    // Hide loading, show results
    loadingElement.style.display = 'none';
    resultElement.style.display = 'block';
}

// The main initialization function that runs when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize DOM elements
    initDOMElements();
    
    // Initialize theme
    initTheme();
    
    // Initialize gender
    initGender();
    
    // Add event listener for theme toggle button
    themeToggle.addEventListener('click', toggleTheme);
    
    // Add event listener for speak button
    speakButton.addEventListener('click', function() {
        speakText(mainRecommendationElement.textContent);
    });

    // Add event listener for gender toggle button
    if (genderToggle) {
        genderToggle.addEventListener('click', toggleGender);
    }
    
    // Add event listener for fact button
    factButton.addEventListener('click', showRandomFact);
    
    // Service Worker Registration for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/school-weather-app/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    }
    
    // Load weather data
    getWeatherForecast();
});
