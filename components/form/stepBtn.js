export default function Steps({ currentStep }) {
  return (
    <nav className="flex items-center justify-center" aria-label="Progress">
      <ol role="list" className="ml-8 flex items-center space-x-5">
        {[1, 2, 3, 4.5].map((step) => (
          <li key={step}>
            {step.status === "complete" ? (
              <a
                href={"signup/" + step}
                className="block h-2.5 w-2.5 rounded-full bg-blblue hover:bg-bblue"
              >
                <span className="sr-only">{step}</span>
              </a>
            ) : step === currentStep ? (
              <a
                href={"signup/" + step}
                className="relative flex items-center justify-center"
                aria-current="step"
              >
                <span className="absolute flex h-5 w-5 p-px" aria-hidden="true">
                  <span className="h-full w-full rounded-full bg-blblue" />
                </span>
                <span
                  className="relative block h-2.5 w-2.5 rounded-full bg-bblue"
                  aria-hidden="true"
                />
                <span className="sr-only">{step}</span>
              </a>
            ) : (
              <a
                href={"signup/" + step}
                className="block h-2.5 w-2.5 rounded-full bg-gray-200 hover:bg-gray-400"
              >
                <span className="sr-only">{step}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
