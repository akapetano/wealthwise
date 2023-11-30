import { FinancialSecurityForm } from "@/components/features/FinancialSecurityForm";
import { FormWrapper } from "@/components/shared/FormWrapper";
import { FORMS_INFO } from "@/constants";

export default function FinancialSecurity() {
  return (
    <FormWrapper
      title={FORMS_INFO.financialSecurity.title}
      description={FORMS_INFO.financialSecurity.description}
      nextLevelUrl="/financial-vitality"
    >
      <FinancialSecurityForm />
    </FormWrapper>
  );
}
