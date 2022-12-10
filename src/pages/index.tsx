import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
  useToken,
  VStack,
} from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import LocaleCurrency from "locale-currency";
import { ReactElement, useEffect, useState } from "react";
import { FaCheckCircle, FaMixer, FaQuoteLeft } from "react-icons/fa";
import { MdCastConnected, MdLibraryMusic } from "react-icons/md";
import { listPlans, SubscriptionPlan } from "../api/subscriptions";
import DreamerIllustration from "../assets/dreamer.svg";
import FishBowlIllustration from "../assets/fish-bowl.svg";
import MeditatingIllustration from "../assets/meditating.svg";
import NatureOnScreenIllustration from "../assets/nature-on-screen.svg";
import PercentagesIllustration from "../assets/percentages.svg";
import ReadingTimeIllustration from "../assets/reading-time.svg";
import FDroidBadge from "../components/f-droid-badge";
import GooglePlayBadge from "../components/google-play-badge";
import NavBar from "../components/nav-bar";
import Section from "../components/section";
import ShellPage from "../components/shell-page";

const sectionPadding = { base: 28, md: 36 };

export default function Home(): ReactElement {
  const { allPremiumPlan } = useStaticQuery(graphql`
    {
      allPremiumPlan {
        nodes {
          billingPeriodMonths
          priceInIndianPaise
          trialPeriodDays
        }
      }
    }
  `);

  const plans: SubscriptionPlan[] = allPremiumPlan.nodes;
  return (
    <ShellPage
      description={
        "Noice is an app that allows you to create personalised sound environments. Combine different sounds at different volume levels to create perfect ambient atmospheres."
      }
    >
      <VStack bgColor={"primary.50"}>
        <NavBar hideMenu={true} />
        <Hero />
        <WavyEdge from={"transparent"} to={"indigo.50"} />
      </VStack>
      <Features />
      <Image src={FishBowlIllustration} w={"full"} bg={"indigo.50"} />
      <Reviews />
      <WavyEdge from={"orange.100"} to={"white"} />
      <Pricing subscriptionPlans={plans} />
    </ShellPage>
  );
}

function Hero(): ReactElement {
  return (
    <Section py={{ base: 0, lg: 16 }}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        align={"center"}
        justify={"center"}
        spacing={{ base: 8, md: 12, lg: 16, xl: 20 }}
      >
        <Image
          src={MeditatingIllustration}
          alt={"focused and meditating"}
          w={"full"}
          maxW={{ base: "3xs", md: "2xs", lg: "xs", xl: "sm" }}
        />

        <VStack spacing={10} align={{ base: "center", lg: "start" }}>
          <VStack
            spacing={2}
            align={{ base: "center", lg: "start" }}
            textAlign={{ base: "center", lg: "start" }}
          >
            <Heading
              lineHeight={"short"}
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
              fontWeight={"normal"}
            >
              Focus. Meditate. Relax.
            </Heading>
            <Text fontSize={{ base: "xl", md: "2xl", lg: "3xl", xl: "4xl" }}>
              With{" "}
              <Text as={"span"} color={"primary.500"} fontWeight={"medium"}>
                natural calming noise
              </Text>
              .
            </Text>
          </VStack>
          <HStack spacing={6}>
            <GooglePlayBadge />
            <FDroidBadge />
          </HStack>
        </VStack>
      </Stack>
      <Benefits />
    </Section>
  );
}

function Benefits(): ReactElement {
  function Benefit({ description, icon, iconDesc }: any): ReactElement {
    return (
      <Stack
        w={"full"}
        maxW={{ base: "lg", md: "xl", lg: "2xl", xl: "3xl" }}
        p={8}
        direction={{ base: "column", sm: "row" }}
        align={"center"}
        spacing={8}
        bg={"#fff"}
        border={"1px"}
        borderColor={"primary.50"}
        borderRadius={"lg"}
        shadow={"lg"}
      >
        <Image src={icon} alt={iconDesc} maxW={{ base: 32, lg: 36 }} />
        <Text
          fontSize={{ base: "md", lg: "lg" }}
          textAlign={{ base: "center", sm: "left" }}
        >
          {description}
        </Text>
      </Stack>
    );
  }

  return (
    <Section pt={{ base: 24, md: 32 }}>
      <VStack justifyItems={"center"} spacing={12}>
        <Benefit
          description={
            "Reduce your stress or anxiety, and allow yourself to relax and unwind."
          }
          icon={DreamerIllustration}
          iconDesc={"relax"}
        />
        <Benefit
          description={
            "Drown out the distracting noise or the deafening silence so you can focus on what's important."
          }
          icon={PercentagesIllustration}
          iconDesc={"work"}
        />
        <Benefit
          description={
            "Improve your reading or meditation experience, mask your tinnitus, calm your infants, or just lay back and fall asleep."
          }
          icon={ReadingTimeIllustration}
          iconDesc={"misc"}
        />
      </VStack>
    </Section>
  );
}

function Features(): ReactElement {
  return (
    <Section bg={"indigo.50"} py={sectionPadding}>
      <Stack
        direction={{ base: "column", lg: "row-reverse" }}
        align={"center"}
        spacing={24}
      >
        <Image
          src={NatureOnScreenIllustration}
          alt={"nature on screen"}
          w={"full"}
          maxW={{ base: "2xs", md: "xs", lg: "sm", xl: "md" }}
        />

        <VStack
          spacing={8}
          align={{ base: "center", lg: "start" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          <Heading size={"xl"} color={"indigo.400"}>
            Enjoy an immersive sound experience
          </Heading>

          <Text>
            Our 3rd generation sound engine brings randomised variability to
            sounds, thus generating more natural-sounding ambient atmospheres.
          </Text>

          <VStack
            spacing={4}
            align={"flex-start"}
            divider={<StackDivider borderColor={"indigo.100"} />}
          >
            <FeatureItem
              icon={<MdLibraryMusic />}
              title={"Diverse sound library"}
            />
            <FeatureItem
              icon={<FaMixer />}
              title={"Naturally varying sounds"}
            />
            <FeatureItem
              icon={<MdCastConnected />}
              title={"Chromecast enabled"}
            />
          </VStack>
        </VStack>
      </Stack>
    </Section>
  );
}

interface FeatureItemProps {
  title: string;
  icon: ReactElement;
}

function FeatureItem(props: FeatureItemProps): ReactElement {
  return (
    <HStack align={"center"} spacing={2}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={"indigo.100"}
        color={"indigo.400"}
        fontSize={"xl"}
      >
        {props.icon}
      </Flex>
      <Text fontWeight={500}>{props.title}</Text>
    </HStack>
  );
}

interface Review {
  content: string;
  reviewer: string;
}

const reviews: Array<Review> = [
  {
    content:
      "Very nicely done app. I have tinnitus and this app helps me concentrate and sleep. In my opinion the UI is great and straight forward to use and the sounds are nice.",
    reviewer: "Miika Vuorio",
  },
  {
    content:
      "Great little app, just what I needed. I love mixing sounds and it's easy to use. I like the different themes and think the sleep timer is a nice touch. The recorded sounds are all great quality and loop very smoothly and I love that you can change their frequency and volume individually. No more using YouTube white noise videos for me! One thing I would like would be the option to record or add your own sounds.",
    reviewer: "Polly F",
  },
  {
    content:
      "Noice is the perfect background noise app. I use it for reading, sleeping, or just relaxing after a long day. No ads, infinite loops, and excellent sample quality. I couldn't have asked for anything more!",
    reviewer: "Will Burton-Edwards",
  },
];

function Reviews(): ReactElement {
  return (
    <Section py={sectionPadding} bg={"orange.100"}>
      <VStack w={"full"} maxW={"3xl"} mx={"auto"} spacing={24}>
        <Heading color={"orange.500"}>Loved by people</Heading>
        {reviews.map((r) => (
          <ReviewCard review={r} />
        ))}
      </VStack>
    </Section>
  );
}

interface ReviewCardProps {
  review: Review;
}

function ReviewCard(props: ReviewCardProps) {
  return (
    <VStack
      w={"full"}
      p={8}
      rounded={"xl"}
      bg={"white"}
      boxShadow={"lg"}
      position={"relative"}
    >
      <Text
        position={"absolute"}
        left={6}
        top={-5}
        fontSize={"4xl"}
        color={"orange.500"}
      >
        <FaQuoteLeft />
      </Text>
      <Text pb={4} textAlign={"start"}>
        {props.review.content}
      </Text>
      <Text
        w={"full"}
        fontWeight={"medium"}
        fontSize={"sm"}
        textAlign={"end"}
        color={"orange.500"}
      >
        &mdash; {props.review.reviewer}
      </Text>
    </VStack>
  );
}

interface PricingProps {
  subscriptionPlans: SubscriptionPlan[];
}

interface PlanInfo {
  billingPeriodMonths: number;
  monthlyPriceRaw: number;
  monthlyPrice: string;
  totalPrice: string;
  trialPeriodDays: number;
}

function formatPrice(price: number, locale: string, currency: string): string {
  const format = new Intl.NumberFormat(locale || "en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
  });

  return format.format(price);
}

function subscriptionPlanToPlanInfo(
  p: SubscriptionPlan,
  locale: string
): PlanInfo {
  const total = p.priceInRequestedCurrency || p.priceInIndianPaise / 100.0;
  const monthly = total / p.billingPeriodMonths;
  const currency = p.requestedCurrencyCode || "INR";
  return {
    billingPeriodMonths: p.billingPeriodMonths,
    monthlyPriceRaw: monthly,
    monthlyPrice: formatPrice(monthly, locale, currency),
    totalPrice: formatPrice(total, locale, currency),
    trialPeriodDays: p.trialPeriodDays,
  };
}

function Pricing(props: PricingProps): ReactElement {
  const [planInfos, setPlanInfos] = useState(
    props.subscriptionPlans.map((p) => subscriptionPlanToPlanInfo(p, "en-US"))
  );

  useEffect(() => {
    async function fetchPremiumPlans() {
      const locale = window.navigator.language;
      if (!locale) {
        return;
      }

      const currencyCode = LocaleCurrency.getCurrency(locale);
      if (!currencyCode) {
        return;
      }

      try {
        const plans = await listPlans("stripe", currencyCode);
        setPlanInfos(plans.map((p) => subscriptionPlanToPlanInfo(p, locale)));
      } catch (e) {
        console.warn("failed to retrieve premium plans in local currency", e);
      }
    }

    fetchPremiumPlans();
  }, []);

  const { trialPeriodDays: maxTrialPeriod } = planInfos.reduce((p, n) =>
    p.trialPeriodDays > n.trialPeriodDays ? p : n
  );

  const { monthlyPrice: minMonthlyPrice } = planInfos.reduce((p, n) =>
    p.monthlyPriceRaw < n.monthlyPriceRaw ? p : n
  );

  return (
    <Section id={"pricing"} py={sectionPadding}>
      <Stack
        mb={8}
        direction={{ base: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={{ base: "flex-start", md: "space-around" }}
        spacing={4}
      >
        <Heading
          width={{ base: "100%", md: "40%" }}
          size={"xl"}
          lineHeight={1.33}
          textAlign={"center"}
        >
          Flexible Plans for{" "}
          <Text as={"span"} color={"pink.500"}>
            Your Needs
          </Text>
        </Heading>
        <Text
          width={{ base: "100%", md: "60%" }}
          textAlign={"center"}
          fontSize={"lg"}
          mb={8}
        >
          Use the free tier or get an improved experience with a premium plan.
          You can try a premium plan for free for up to {maxTrialPeriod} days.
        </Text>
      </Stack>
      <Divider />
      <TierInfo
        tier={"Free"}
        benefits={[
          "28 high-fidelity sounds",
          "Stream audio with Chromecast",
          "2 active alarms on Android",
          "Sleep timer on Android",
          "Average quality audio streaming",
        ]}
      />
      <Divider />
      <TierInfo
        tier={"Premium"}
        benefits={[
          "Everything in free-tier",
          "Longer sounds with more variants",
          "Natural variations in sounds",
          "Offline Playback on Android",
          "Ultra high quality audio streaming",
          "Unlimited active alarms on Android",
        ]}
        pricing={`Starts at ${minMonthlyPrice}/month`}
      />
      <PremiumTierPricing planInfos={planInfos} />
    </Section>
  );
}

interface TierInfoProps {
  tier: string;
  benefits: string[];
  pricing?: string;
}

function TierInfo(props: TierInfoProps): ReactElement {
  return (
    <Stack
      my={8}
      direction={{ base: "column", md: "row" }}
      justifyContent={{ base: "flex-start", md: "space-around" }}
      align={"center"}
      spacing={12}
    >
      <Heading flex={1} fontSize={{ base: "xl", md: "2xl" }}>
        {props.tier}
      </Heading>
      <List flex={1} spacing={3}>
        {props.benefits.map((b) => (
          <ListItem>
            <ListIcon
              as={FaCheckCircle}
              verticalAlign={"middle"}
              color={"pink.500"}
            />
            {b}
          </ListItem>
        ))}
      </List>
      <Text flex={1} fontSize={{ base: "lg", md: "xl" }}>
        {props.pricing}
      </Text>
    </Stack>
  );
}

interface PremiumTierPricingProps {
  planInfos: PlanInfo[];
}

function PremiumTierPricing(props: PremiumTierPricingProps): ReactElement {
  props.planInfos.sort((a, b) =>
    a.billingPeriodMonths > b.billingPeriodMonths ? -1 : 1
  );

  return (
    <VStack pt={sectionPadding} spacing={12}>
      <Heading color={"pink.500"} size={"lg"} textAlign={"center"}>
        Premium Plans
      </Heading>
      <SimpleGrid
        w={"full"}
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={8}
        alignItems={"center"}
        justifyItems={"center"}
      >
        {props.planInfos.map((info) => (
          <VStack
            w={"full"}
            maxW={"xs"}
            p={8}
            spacing={6}
            alignItems={"center"}
            textAlign={"center"}
            bg={"#fff"}
            shadow={"lg"}
            border={"1px"}
            borderColor={"gray.50"}
            borderRadius={"xl"}
          >
            <Text fontSize={"2xl"}>
              {info.billingPeriodMonths == 1
                ? "Monthly"
                : info.billingPeriodMonths == 3
                ? "Quarterly"
                : info.billingPeriodMonths == 6
                ? "Bi-yearly"
                : info.billingPeriodMonths == 12
                ? "Yearly"
                : `Every ${info.billingPeriodMonths} months`}
            </Text>
            <Text>
              <Text as="span" fontSize={"3xl"}>
                {info.monthlyPrice}
              </Text>
              /month
            </Text>
            <Text lineHeight={"taller"}>
              for{" "}
              <Text as={"span"} fontWeight={"medium"}>
                {info.totalPrice}
              </Text>
              <br />
              every{" "}
              <Text as={"span"} fontWeight={"medium"}>
                {info.billingPeriodMonths == 1
                  ? "month"
                  : `${info.billingPeriodMonths} months`}
              </Text>
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </VStack>
  );
}

interface WavyEdgeProps {
  from?: string;
  to?: string;
}

let lastWavyEdgePatternId = 0;

function WavyEdge(props: WavyEdgeProps): ReactElement {
  const patternId = `bg-${++lastWavyEdgePatternId}`;
  const baseW = 128;
  const viewBoxW = useBreakpointValue({
    base: baseW,
    sm: baseW * 1.5,
    md: baseW * 2,
    lg: baseW * 2.5,
    xl: baseW * 3,
  });

  const [bg, fg] = useToken("colors", [
    props.from || "white",
    props.to || "black",
  ]);

  return (
    <Box
      as={"svg"}
      viewBox={`0 0 ${viewBoxW} 8`}
      xmlns={"http://www.w3.org/2000/svg"}
    >
      <defs>
        <pattern
          id={patternId}
          patternUnits={"userSpaceOnUse"}
          width={baseW}
          height={8}
        >
          <rect width={baseW} height={8} fill={bg} />
          <path fill={fg} d={"M0 2c42-8 71 12 128 0V8H0Z"} />
        </pattern>
      </defs>
      <rect width={"100%"} height={"100%"} fill={`url(#${patternId})`} />
    </Box>
  );
}
