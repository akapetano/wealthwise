export const STORAGE_KEY = {
  financialSecurity: "financialSecurity",
  financialVitality: "financialVitality",
  financialIndependence: "financialIndependence",
  financialFreedom: "financialFreedom",
  absoluteFinancialFreedom: "absoluteFinancialFreedom",
} as const;

export const FINANCIAL_SECURITY = {
  rentOrMortgagePayment: "rentOrMortgagePayment",
  foodHousehold: "foodHousehold",
  gasElectricWaterPhone: "gasElectricWaterPhone",
  transportation: "transportation",
  insurancePayments: "insurancePayments",
  totalForFinancialSecurity: "totalForFinancialSecurity",
} as const;

export const FINANCIAL_VITALITY = {
  clothingCosts: "clothingCosts",
  diningAndEntertainmentCosts: "diningAndEntertainmentCosts",
  smallIndulgenceOrLittleLuxuryCosts: "smallIndulgenceOrLittleLuxuryCosts",
  additionalIncomeForVitality: "additionalIncomeForVitality",
  financialSecurityNumber: "financialSecurityNumber",
  totalForFinancialVitality: "totalForFinancialVitality",
} as const;

export const FINANCIAL_INDEPENDENCE = {
  totalForFinancialIndependence: "totalForFinancialIndependence",
} as const;

export const FINANCIAL_FREEDOM = {
  luxuryItemNum1: "luxuryItemNum1",
  luxuryItemNum1Label: "luxuryItemNum1Label",
  luxuryItemNum2: "luxuryItemNum2",
  luxuryItemNum2Label: "luxuryItemNum2Label",
  donation: "donation",
  financialIndependenceNumber: "financialIndependenceNumber",
} as const;

export const ABSOLUTE_FINANCIAL_FREEDOM = {
  luxuryItemNum1: "luxuryItemNum1",
  luxuryItemNum1Label: "luxuryItemNum1Label",
  luxuryItemNum2: "luxuryItemNum2",
  luxuryItemNum2Label: "luxuryItemNum2Label",
  luxuryItemNum3: "luxuryItemNum3",
  luxuryItemNum3Label: "luxuryItemNum3Label",
  financialFreedomNumber: "financialFreedomNumber",
  totalForAbsoluteFinancialFreedom: "totalForAbsoluteFinancialFreedom",
} as const;

export const FORMS_INFO = {
  financialSecurity: {
    title: "1: Financial Security",
    description:
      "Getting financially secure is like making friends with your bills—think home mortgage, utilities, food, transportation, and insurance. To kick off your journey to financial freedom, let's figure out just how much cash you need to keep the good times rolling on life's essentials!",
  },
  financialVitality: {
    title: "2: Financial Vitality",
    description:
      "Welcome to the land of Financial Vitality, where we're talking about the fun stuff—entertainment, small indulgences, and those little luxuries like a gym membership. The goal here? Imagine covering at least half of these costs without lifting a finger for work. It's all about adding a dash of delight to your financial game!",
  },
  financialIndependence: {
    title: "3: Financial Independence",
    description:
      "Picture this: Financial Independence, where you can maintain your current lifestyle without clocking in. The magic happens when the annual interest from your savings and investments becomes your paycheck—even while you're catching Zs. Let's crunch the numbers to find out just how much moolah you need to keep living your best life, work-free!",
  },
  financialFreedom: {
    title: "4: Financial Freedom",
    description:
      "Financial Freedom is that golden zone where you're living your today-plus-dream-luxuries life, no work needed. Plus, you've got a little extra to spread the good vibes—whether it's giving back to the community, supporting causes you love, or just making the world a bit brighter. It's not just financial freedom; it's freedom to make a difference!",
  },
  absoluteFinancialFreedom: {
    title: "5: Absolute Financial Freedom",
    description:
      "Imagine this: Absolute Financial Freedom, where you're the maestro of your life's symphony. Anything you want, anytime you want—it's the ultimate freedom. No more wanting for you and your family. The difference between dreamers and those living their dream? Knowing the price of those dreams. Reach for the stars with absolute financial freedom, and turn your dreams into your everyday reality.",
  },
} as const;
