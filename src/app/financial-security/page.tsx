import { FinancialSecurityForm } from "@/components/features/FinancialSecurityForm";
import { FormWrapper } from "@/components/shared/FormWrapper";

export default function FinancialSecurity() {
  return (
    <FormWrapper
      title="1: Financial Security"
      nextLevelUrl="/financial-vitality"
    >
      <FinancialSecurityForm />
    </FormWrapper>
  );
}
