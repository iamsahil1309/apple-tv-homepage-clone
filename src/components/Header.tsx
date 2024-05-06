import { Button } from "./Button"
import { Container } from "./Container"

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast relative z-20 text-white">
        <Container className="flex min-h-[--header-row-height] items-center">
          <a
            href="/"
            className="-ml-6 flex h-[--header-row-height] items-center px-6 text-xl"
          >
            <img height={20} width={20} src="/public/apple-32.png" alt="logo" className="m-4" />
                <span className="sr-only">Back to homepage</span>

          </a>
        </Container>
      </header>

      <div className="bg-backgroundContrast mb-16 lg:mb-1 sticky top-0 z-20 text-white">
        <Container className="flex min-h-[--header-row-height] items-center justify-between">
          <p className="text-xl font-semibold">Apple TV+</p>
          <Button  size="small">Stream now</Button>
        </Container>
      </div>
    </>
  );
};