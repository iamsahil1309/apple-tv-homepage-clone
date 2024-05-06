import { Button } from "../Button";
import { Container } from "../Container";
import { FadeIn } from "../fade-in";

export const Usps = () => {
  return (
    <>
      <Container className="relative z-10 max-w-[692px] space-y-12 py-34 text-3xl font-bold text-white md:text-4xl">
        <FadeIn>
          <p>New Apple Originals every month — always ad‑free.</p>
        </FadeIn>
        <FadeIn>
          <p>
            Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
            sticks.
          </p>
        </FadeIn>
        <FadeIn>
          <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
        </FadeIn>
        <FadeIn>
          <p>Share a single subscription with up to five people.</p>
        </FadeIn>
      </Container>

      <Container className="relative z-10 py-36 text-white flex space-x-20">
        <FadeIn>
          <p className="text-xl font-semibold">Buy an Apple device</p>
          <h1 className="text-2xl font-bold ">3 months free.</h1>
          <p className=" opacity-45 text-sm">
            Apple TV+ is included for 3 months when you purchase an Apple device
            and redeem the offer within 90 days.2
          </p>
          <Button classname="mt-4">Check elgibility</Button>
        </FadeIn>

        <FadeIn>
          <p className="text-xl font-semibold">Free 7-day trial</p>
          <h1 className="text-2xl font-bold ">$9.99/mo.</h1>
          <p className=" opacity-45 text-sm">
            A monthly subscription is just $9.99 per month after a free 7-day
            trial.3 Share Apple TV+ with your family.4
          </p>
          <Button classname="mt-4">Try it free</Button>
        </FadeIn>

        <FadeIn>
          <p className="text-xl font-semibold">Free 1‑month trial</p>
          <h1 className="text-2xl font-bold ">Apple One</h1>
          <p className=" opacity-45 text-sm">
            Bundle Apple TV+ with up to five other great services for one low
            monthly price. And enjoy more for less. <span>Learn more.</span>
          </p>
          <Button classname="mt-4">Try Apple One free</Button>
        </FadeIn>
      </Container>
    </>
  );
};
