import { FinancialVitalityForm } from "@/components/features/FinancialVitalityForm";
import { FormWrapper } from "@/components/shared/FormWrapper";

export default function FinancialVitality() {
  return (
    <FormWrapper
      prevLevelUrl="/financial-security"
      nextLevelUrl="/financial-independence"
      title="2: Financial Vitality"
    >
      <FinancialVitalityForm />
    </FormWrapper>
  );
}
