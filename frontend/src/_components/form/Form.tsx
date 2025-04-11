import { useState } from "react"
import FormLoading from "./FormLoading";
import FormResponse from "./FormResponse";

export default function Form({ children }: { children: any }) {
  const [isSent, setIsSent] = useState(false);
  const [isResponseReeived, setIsResponseReeived] = useState(false);

  const handleSubmit = () => {
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setIsResponseReeived(true);
    }, 3000)
  }

  return <>
    {
      (!isSent && !isResponseReeived) &&
      <></>
    }

    {
      (isSent && !isResponseReeived) &&
      <FormLoading>
        <></>
      </FormLoading>
    }

    {
      isResponseReeived &&
      <FormResponse>
        <></>
      </FormResponse>
    }
  </>
}