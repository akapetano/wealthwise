import { FinancialSecurityForm } from "@/components/FinancialSecurityForm";
import { FormWrapper } from "@/components/shared/FormWrapper";

export default function FinancialFreedom() {
  return (
    <FormWrapper
      prevLevelUrl="/financial-independence"
      nextLevelUrl="/absolute-financial-freedom"
      title="4: Financial Freedom"
    >
      <FinancialSecurityForm />
    </FormWrapper>
  );
}
