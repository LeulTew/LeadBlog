import { 
  Leaf, 
  Milk, 
  AlertTriangle, 
  ShieldCheck, 
  Coffee,
  Sprout,
} from 'lucide-react';
import { LeadDataItem, BrandDataItem, SourcesData } from '@/types';

export const DATA_SOURCE: LeadDataItem[] = [
  // --- Staples ---
  { category: "Staples", name: "Teff grain / Injera", level: "0.01 – 0.08 mg/kg", valMean: 0.045, risk: "Very Low", notes: "Safest daily Ethiopian staple", type: "plant", icon: Sprout },
  { category: "Staples", name: "Enset (kocho)", level: "<0.05 mg/kg", valMean: 0.02, risk: "Very Low", notes: "Highland crop, almost no contamination", type: "plant", icon: Leaf },
  { category: "Staples", name: "Sorghum, barley, wheat", level: "0.02 – 0.10 mg/kg", valMean: 0.06, risk: "Low", notes: "Rural grains are very clean", type: "plant", icon: Sprout },
  
  // --- Plant Protein ---
  { category: "Plant Protein", name: "Chickpeas (Shimbra/Shiro)", level: "0.05 – 0.15 mg/kg", valMean: 0.1, risk: "Low", notes: "Safe local protein source (Kolo/Shiro)", type: "plant", icon: Sprout },
  { category: "Plant Protein", name: "Soy Chunks (Fasting Meat)", level: "0.02 – 0.10 mg/kg", valMean: 0.06, risk: "Low", notes: "Processed; generally clean if imported base", type: "plant", icon: Leaf },
  { category: "Plant Protein", name: "Lentils (Misir)", level: "0.05 – 0.20 mg/kg", valMean: 0.125, risk: "Low", notes: "Extremely safe protein source", type: "plant", icon: Sprout },

  // --- Supplements (General) ---
  { category: "Supplements", name: "Whey Isolate (Imported)", level: "0.001 – 0.005 mg/kg", valMean: 0.003, risk: "Extremely Low", notes: "Genuine brands (ON/Dymatize) in pharmacies", type: "whey", icon: ShieldCheck },
  { category: "Supplements", name: "Whey Concentrate", level: "0.01 – 0.05 mg/kg", valMean: 0.03, risk: "Very Low", notes: "Standard safe option", type: "whey", icon: Milk },
  { category: "Supplements", name: "Bulk/Generic Powders", level: "0.1 – 0.5 mg/kg", valMean: 0.3, risk: "Moderate", notes: "Unbranded tubs in open markets", type: "whey", icon: AlertTriangle },

  // --- Vegetables & High Risk ---
  { category: "Vegetables", name: "Leafy Greens (Gomen)", level: "0.1 – 0.6+ mg/kg", valMean: 0.5, risk: "High", notes: "Highest risk near cities/factories", type: "veg", icon: AlertTriangle },
  { category: "Vegetables", name: "Root Crops (Potato/Taro)", level: "0.05 – 0.25 mg/kg", valMean: 0.15, risk: "Moderate", notes: "Absorbs soil metals", type: "veg", icon: Leaf },
  { category: "Vegetables", name: "Tomato, Onion (City)", level: "0.1 – 0.5 mg/kg", valMean: 0.3, risk: "Moderate–High", notes: "Risk from Akaki river irrigation", type: "veg", icon: AlertTriangle },
  
  // --- Others ---
  { category: "Beverages", name: "Coffee beans (Ethiopian)", level: "0.03 – 0.12 mg/kg", valMean: 0.075, risk: "Low", notes: "Cleanest globally", type: "plant", icon: Coffee },
  { category: "Spices", name: "Berbere / Mitmita", level: "0.1 – 0.6 ppm", valMean: 0.35, risk: "Low–Moderate", notes: "Check for adulteration", type: "plant", icon: AlertTriangle },
];

export const BRAND_DATA: BrandDataItem[] = [
  { brand: "Optimum Nutrition (Gold Std)", type: "Whey Isolate/Blend", risk: "Extremely Low", availability: "Pharmacies / Gyms", notes: "Consistently tests cleanest globally." },
  { brand: "Dymatize ISO100", type: "Hydrolyzed Whey", risk: "Extremely Low", availability: "Supplement Stores", notes: "Top tier filtration, almost zero heavy metals." },
  { brand: "Ensure / Glucerna", type: "Medical Nutrition", risk: "Very Low", availability: "Most Pharmacies", notes: "Medical grade standards, very safe." },
  { brand: "Naked Whey", type: "Grass-Fed Whey", risk: "Very Low", availability: "Special Order / Diaspora", notes: "Minimal processing, clean source." },
  { brand: "MuscleTech / BSN", type: "Whey Blend", risk: "Low", availability: "Gyms / Malls", notes: "Safe, but slightly more additives than Isolates." },
  { brand: "Generic 'Mass Gainers'", type: "Carb/Protein Mix", risk: "Moderate–High", availability: "Mercato / Kiosks", notes: "Often untested; high risk of cheap fillers." },
  { brand: "Unlabeled Bulk Bags", type: "Unknown Powder", risk: "High", availability: "Open Markets", notes: "DO NOT BUY. High risk of adulteration." },
];

export const SOURCES: SourcesData = {
  ethiopia: [
    { title: "Toke Kutaye Vegetables (2024/2025)", links: ["https://www.sciencedirect.com/science/article/pii/S2214750025001799", "https://pmc.ncbi.nlm.nih.gov/articles/PMC12163411/"] },
    { title: "Gondar Vegetables (2025)", links: ["https://foodsafetyandrisk.biomedcentral.com/articles/10.1186/s40550-025-00115-z"] },
    { title: "Mojo Vegetables (2020)", links: ["https://pubmed.ncbi.nlm.nih.gov/31999756/", "https://www.researchgate.net/publication/338932615_Levels_of_heavy_metals_in_soil_and_vegetables_and_associated_health_risks_in_Mojo_area_Ethiopia"] },
    { title: "Addis Ababa Horticultural Crops (2023)", links: ["https://pmc.ncbi.nlm.nih.gov/articles/PMC10630556/", "https://www.sciencedirect.com/science/article/pii/S221475002300094X"] },
    { title: "Teff Studies (Rift Valley/Abote) (2021-2024)", links: ["https://pubmed.ncbi.nlm.nih.gov/34366562/", "https://onlinelibrary.wiley.com/doi/10.1002/fsn3.4075"] },
    { title: "Dietary Lead Intake Review (2021)", links: ["https://www.researchgate.net/publication/353513466_Levels_of_Heavy_Metal_in_Vegetable_Fruits_and_Cereals_Crops_in_Ethiopia_A_Review"] }
  ],
  protein: [
    { title: "Consumer Reports 2025 Study", links: ["https://www.consumerreports.org/lead/protein-powders-and-shakes-contain-high-levels-of-lead-a4206364640/", "https://www.npr.org/2025/10/16/nx-s1-5576294/protein-powder-lead-consumer-reports"] },
    { title: "Clean Label Project 2025 Protein Study 2.0", links: ["https://cleanlabelproject.org/protein-study-2-0/", "https://cleanproteinlist.com/blog/lead-in-protein-powder-list.html"] },
    { title: "Peer-Reviewed Risk Assessments", links: ["https://pmc.ncbi.nlm.nih.gov/articles/PMC7509468/", "https://pmc.ncbi.nlm.nih.gov/articles/PMC12286494/"] }
  ]
};
