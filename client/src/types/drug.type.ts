export interface DrugData {
  drugid: number;
  itemName: string; // 의약품명
  ingrEngName: string; // 성분(영문)
  ingrKorName: string; // 성분
  efcyQesitm: string; //효능효과
  printFront: string; // 식별문자(앞)
  printBack: string; // 식별문자(뒤)
  dosageForm: string; // 제형
  drugShape: string; // 모양
  colorClass1: string; // 색상
  colorClass2: string;
  linFront: string; // 분할선(앞)
  lineBack: string; // 분할선(뒤)
}

export interface DrugReferenceData {
  drugid: number;
  itemImage?: string; // 이미지URL
  itemName: string; // 의약품명
  ingrEngName: string; // 성분(영문)
  efcyQesitm: string; //효능효과
}

export interface DrugReferenceDetail {
  data: DrugReferenceData[];
  itemImage: string; // 이미지URL
  itemName: string; // 의약품명
  ingrEngName: string; // 성분(영문)
  efcyQesitm: string; //효능효과
  dosageForm: string; // 제형
  useMethodQesitm: string; // 복용방법
  seQesitm: string; // 부작용
  depositMethodQesitm: string; // 주의사항
}

export interface DrugState {
  data: DrugData[];
  selectedDrugCategory: string;
  searchResults: DrugData[];
  searchDrug: string;
}
