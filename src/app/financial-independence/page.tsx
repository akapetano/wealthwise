import { FinancialIndependenceForm } from "@/components/features/FinancialIndependenceForm";
import { FormWrapper } from "@/components/shared/FormWrapper";
import { FORMS_INFO } from "@/constants";

export default function FinancialIndependence() {
  return (
    <FormWrapper
      prevLevelUrl="/financial-vitality"
      nextLevelUrl="/financial-freedom"
      title={FORMS_INFO.financialIndependence.title}
      description={FORMS_INFO.financialIndependence.description}
    >
      <FinancialIndependenceForm />
    </FormWrapper>
  );
}
