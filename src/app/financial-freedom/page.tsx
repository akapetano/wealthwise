import { FinancialFreedomForm } from "@/components/features/FinancialFreedomForm";
import { FinancialSecurityForm } from "@/components/features/FinancialSecurityForm";
import { FormWrapper } from "@/components/shared/FormWrapper";

export default function FinancialFreedom() {
  return (
    <FormWrapper
      prevLevelUrl="/financial-independence"
      nextLevelUrl="/absolute-financial-freedom"
      title="4: Financial Freedom"
    >
      <FinancialFreedomForm />
    </FormWrapper>
  );
}
