import { FinancialVitalityForm } from "@/components/features/FinancialVitalityForm";
import { FormWrapper } from "@/components/shared/FormWrapper";
import { FORMS_INFO } from "@/constants";

export default function FinancialVitality() {
  return (
    <FormWrapper
      prevLevelUrl="/financial-security"
      nextLevelUrl="/financial-independence"
      title={FORMS_INFO.financialVitality.title}
      description={FORMS_INFO.financialVitality.description}
    >
      <FinancialVitalityForm />
    </FormWrapper>
  );
}
