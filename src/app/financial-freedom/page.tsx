import { FinancialFreedomForm } from "@/components/features/FinancialFreedomForm";
import { FormWrapper } from "@/components/shared/FormWrapper";
import { FORMS_INFO } from "@/constants";

export default function FinancialFreedom() {
  return (
    <FormWrapper
      prevLevelUrl="/financial-independence"
      nextLevelUrl="/absolute-financial-freedom"
      title={FORMS_INFO.financialFreedom.title}
      description={FORMS_INFO.financialFreedom.description}
    >
      <FinancialFreedomForm />
    </FormWrapper>
  );
}
