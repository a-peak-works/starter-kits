import {
  ArrowRight,
  BarLineChart,
  BookClosed,
  BookOpen01,
  ChartBreakoutCircle,
  CheckCircleBroken,
  Codepen,
  Cube01,
  CurrencyDollarCircle,
  FileCode01,
  Flag06,
  Folder,
  LayersThree01,
  LifeBuoy01,
  LineChartUp05,
  MessageChatCircle,
  MessageCircle01,
  MessageSmileSquare,
  Monitor04,
  PieChart03,
  PlayCircle,
  Signal01,
  Stars02,
  Users01,
} from '@a-peak-works/untitledui-icons';

import Button from '@/components/shared/buttons/button';

import {
  ImageCardHorizontal,
  FeatureCardVertical,
} from './base-components/nav-menu-item-card';
import { NavMenuItemLink } from './base-components/nav-menu-item';
import { FeaturedIconBase } from '@/components/foundations/featured-icon/featured-icons';
import { Badge, BadgeWithDot } from '@/components/shared/badges/badges';
import { useTranslations } from 'next-intl';

export const DropdownMenuSimple = () => {
  const items = [
    {
      title: 'Blog',
      subtitle:
        'The latest industry new and guides curated by our expert team.',
      href: '/blog',
      Icon: BookClosed,
    },
    {
      title: 'Customer stories',
      subtitle:
        'Learn how our customers are using Untitled UI to 10x their growth.',
      href: '/customer-stories',
      Icon: Stars02,
    },
    {
      title: 'Video tutorials',
      subtitle:
        'Get up and running on our newest features and in-depth guides.',
      href: '/tutorials',
      Icon: PlayCircle,
    },
    {
      title: 'Documentation',
      subtitle:
        'In-depth articles on our tools and technologies to empower teams.',
      href: '/docs',
      Icon: FileCode01,
    },
    {
      title: 'Help and support',
      subtitle:
        'Need help with something? Our expert team is here to help 24/7.',
      href: '/help',
      Icon: LifeBuoy01,
    },
  ];

  return (
    <div className='px-3 pb-2 md:max-w-[336px] md:p-0'>
      <nav className='overflow-hidden rounded-2xl bg-primary py-2 shadow-xs ring-1 ring-border-secondary md:p-2 md:shadow-lg'>
        <ul className='flex flex-col gap-0.5'>
          {items.map(({ title, subtitle, href, Icon }) => (
            <li>
              <NavMenuItemLink
                icon={Icon}
                title={title}
                subtitle={subtitle}
                href={href}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export const DropdownMenuSimpleWithFooter = ({
  prefix,
}: {
  prefix: string;
}) => {
  const head = useTranslations('headers');
  const btn = useTranslations('buttons');
  const items = [
    {
      title: 'blog',
      subtitle: 'blog_desc',
      href: '/blog',
      Icon: BookClosed,
    },
    {
      title: 'customer_stories',
      subtitle: 'customer_stories_desc',
      href: '/customer-stories',
      Icon: Stars02,
    },
    {
      title: 'video_tutorials',
      subtitle: 'video_tutorials_desc',
      href: '/tutorials',
      Icon: PlayCircle,
    },
    {
      title: 'documentation',
      subtitle: 'documentation_desc',
      href: '/docs',
      Icon: FileCode01,
    },
    {
      title: 'help_and_support',
      subtitle: 'help_and_support_desc',
      href: '/help',
      Icon: LifeBuoy01,
    },
  ];

  return (
    <div className='px-3 pb-2 md:max-w-[336px] md:p-0'>
      <nav className='overflow-hidden rounded-xl bg-secondary shadow-xs ring-1 ring-inset ring-border-secondary md:rounded-2xl md:shadow-lg'>
        <ul className='flex flex-col gap-0.5 rounded-xl bg-primary py-2 ring-1 ring-inset ring-border-secondary md:rounded-t-2xl md:p-2'>
          {items.map(({ title, subtitle, href, Icon }) => (
            <li>
              <NavMenuItemLink
                icon={Icon}
                title={head(prefix + '.' + title)}
                subtitle={head(prefix + '.' + subtitle)}
                href={href}
              />
            </li>
          ))}
        </ul>
        <div className='px-4 py-5 text-center sm:px-5'>
          <Button
            href='#'
            color='link-color'
            size='lg'
            iconTrailing={<ArrowRight className='size-5' />}>
            {btn('all_resources')}
          </Button>
        </div>
      </nav>
    </div>
  );
};

const menuItemsSimpleTwoColumns = [
  {
    title: 'blog',
    shortSubtitle: 'blog_short_desc',
    subtitle: 'blog_desc',
    href: '/blog',
    Icon: BookClosed,
  },
  {
    title: 'customer_stories',
    shortSubtitle: 'customer_stories_short_desc',
    subtitle: 'customer_stories_desc',
    href: '/customer-stories',
    Icon: Stars02,
  },
  {
    title: 'video_tutorials',
    shortSubtitle: 'video_tutorials_short_desc',
    subtitle: 'video_tutorials_desc',
    href: '/tutorials',
    Icon: PlayCircle,
  },
  {
    title: 'documentation',
    shortSubtitle: 'documentation_short_desc',
    subtitle: 'documentation_desc',
    href: '/docs',
    Icon: FileCode01,
  },
  {
    title: 'help_and_support',
    subtitle: 'help_and_support_desc',
    href: '/help',
    Icon: LifeBuoy01,
  },
  {
    title: 'api_reference',
    subtitle: 'api_reference_desc',
    href: '/api',
    Icon: Codepen,
  },
  {
    title: 'setup_101',
    subtitle: 'setup_101_desc',
    href: '/setup',
    Icon: Cube01,
  },
  {
    title: 'podcast',
    subtitle: 'podcast_desc',
    href: '/podcast',
    Icon: Signal01,
  },
  {
    title: 'university',
    subtitle: 'university_desc',
    href: '/university',
    Icon: BookOpen01,
  },
  {
    title: 'changelog',
    subtitle: 'changelog_desc',
    href: '/changelog',
    Icon: LayersThree01,
  },
];

const megaMenuItems: {
  title: string;
  items: {
    title: string;
    subtitle?: string;
    shortSubtitle?: string;
    href: string;
    Icon: any;
    badge?: any;
  }[];
}[] = [
  {
    title: 'products',
    items: [
      {
        title: 'interactive_reports',
        shortSubtitle: 'interactive_reports_desc',
        href: '/',
        Icon: ChartBreakoutCircle,
      },
      {
        title: 'team_dashboard',
        shortSubtitle: 'team_dashboard_desc',
        href: '/',
        Icon: Monitor04,
      },
      {
        title: 'limitless_segmentation',
        shortSubtitle: 'limitless_segmentation_desc',
        href: '/',
        Icon: PieChart03,
      },
      {
        title: 'group_analytics',
        shortSubtitle: 'group_analytics_desc',
        href: '/',
        Icon: BarLineChart,
      },
    ],
  },
  {
    title: 'use_cases',
    items: [
      {
        title: 'convert',
        subtitle: 'convert_desc',
        shortSubtitle: 'convert_short_desc',
        href: '/',
        Icon: CheckCircleBroken,
      },
      {
        title: 'engage',
        subtitle: 'engage_desc',
        shortSubtitle: 'engage_short_desc',
        href: '/',
        Icon: MessageSmileSquare,
      },
      {
        title: 'retain',
        subtitle: 'retain_desc',
        shortSubtitle: 'retain_short_desc',
        href: '/',
        Icon: CurrencyDollarCircle,
      },
      {
        title: 'grow',
        shortSubtitle: 'grow_short_desc',
        href: '/',
        Icon: LineChartUp05,
        badge: (
          <Badge
            size='md'
            color='gray'
            type='modern'>
            New
          </Badge>
        ),
      },
    ],
  },
  {
    title: 'company',
    items: [
      {
        title: 'blog',
        shortSubtitle: 'blog_short_desc',
        subtitle: 'blog_desc',
        href: '/',
        Icon: BookClosed,
      },
      {
        title: 'customer_stories',
        shortSubtitle: 'customer_stories_short_desc',
        subtitle: 'customer_stories_desc',
        href: '/',
        Icon: Stars02,
      },
      {
        title: 'video_tutorials',
        shortSubtitle: 'video_tutorials_short_desc',
        subtitle: 'video_tutorials_desc',
        href: '/',
        Icon: PlayCircle,
      },
      {
        title: 'documentation',
        shortSubtitle: 'documentation_short_desc',
        subtitle: 'documentation_desc',
        href: '/',
        Icon: FileCode01,
      },
    ],
  },
  {
    title: 'recources',
    items: [
      {
        title: 'about_us',
        shortSubtitle: 'about_us_short_desc',
        subtitle: 'about_us_desc',
        href: '/',
        Icon: Flag06,
      },
      {
        title: 'press',
        shortSubtitle: 'press_short_desc',
        subtitle: 'press_desc',
        href: '/',
        Icon: MessageCircle01,
      },
      {
        title: 'careers',
        shortSubtitle: 'careers_short_desc',
        subtitle: 'careers_desc',
        href: '/',
        Icon: Users01,
        badge: (
          <BadgeWithDot
            size='md'
            color='success'
            type='modern'>
            We're hiring!
          </BadgeWithDot>
        ),
      },
      {
        title: 'legal',
        shortSubtitle: 'legal_short_desc',
        subtitle: 'legal_desc',
        href: '/',
        Icon: Folder,
      },
    ],
  },
];

const articles = [
  {
    title: 'Auto-layout explained',
    subtitle:
      'Jump right in — get an overview of the basics and fundamentals of auto-layout so you can start...',
    imgSrc: '/marketing/auto-layout.png',
  },

  {
    title: 'Top techniques to level up your product design',
    subtitle:
      'The latest best practices and tips from the best in the industry. Learn how to level up your product...',
    imgSrc: '/marketing/conversation.png',
  },
  {
    title: 'Sythesize data like a pro through affinity...',
    subtitle:
      'Synthesis is the mysterious rabbit hole that all data scientists have to learn evenetually. What makes...',
    imgSrc: '/marketing/sythesize.png',
  },
  {
    title: 'Streamline your user research process',
    subtitle:
      'As a user research team of 5 UX researchers, we quickly realized that we’ll need to set up some...',
    imgSrc: '/marketing/conversation.png',
  },
  {
    title: 'How to embrace inclusivity in UX research',
    subtitle:
      'In user experience research, your main job is to consider the user — every user — regardless of...',
    imgSrc: '/marketing/orange-journal.png',
  },
  {
    title: 'The anatomy of great storytelling',
    subtitle: 'Storytelling is everywhere...',
    imgSrc: '/marketing/two-people.png',
  },
  {
    title: 'How to write copy that converts',
    subtitle: 'Improve your conversion rat...',
    imgSrc: '/marketing/sythesize.png',
  },
  {
    title: 'How to create a powerful design presentation',
    subtitle: 'How to create a powerful...',
    imgSrc: '/marketing/story-telling.png',
  },
  {
    title: 'How to communicate the value of design',
    subtitle: "Picture this. You're conducti...",
    imgSrc: '/marketing/value-of-design.png',
  },
];

export const DropdownMenuSimpleTwoColumns = () => {
  return (
    <nav className='px-3 pb-2 md:max-w-[640px] md:p-0'>
      <ul className='grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl bg-primary py-2 shadow-xs ring-1 ring-border-secondary md:grid-cols-2 md:p-2 md:shadow-lg'>
        {menuItemsSimpleTwoColumns.map(({ title, subtitle, href, Icon }) => (
          <li key={title + href}>
            <NavMenuItemLink
              icon={Icon}
              title={title}
              subtitle={subtitle}
              href={href}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const DropdownMenuSimpleTwoColumnsWithFooter = () => {
  return (
    <nav className='px-3 pb-2 md:w-[640px] md:p-0'>
      <div className='flex flex-col overflow-hidden rounded-xl bg-primary shadow-xs ring-1 ring-border-secondary md:gap-4 md:rounded-2xl md:p-2 md:shadow-lg'>
        <div className='grid grid-cols-1 gap-5 pb-5 pt-4 md:grid-cols-2 md:gap-3 md:p-3 md:pb-0'>
          {megaMenuItems.slice(0, 2).map((nav) => (
            <div key={nav.title}>
              <h3 className='mb-2 px-4 text-brand-tertiary tt-sm-semi md:p-0'>
                {nav.title}
              </h3>
              <ul className='flex flex-col gap-0.5'>
                {nav.items
                  .slice(0, 4)
                  .map(({ title, href, Icon, badge, shortSubtitle }) => (
                    <li key={title}>
                      <NavMenuItemLink
                        icon={
                          <FeaturedIconBase
                            className='shrink-0'
                            color='brand'
                            theme='light'
                            size='lg'>
                            <Icon size={24} />
                          </FeaturedIconBase>
                        }
                        title={title}
                        subtitle={shortSubtitle}
                        badge={badge}
                        href={href}
                      />
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='flex flex-col items-start gap-5 bg-secondary px-4 py-5 md:flex-row md:items-center md:gap-3 md:rounded-md md:px-6 md:py-5'>
          <Button
            color='link-color'
            size='lg'
            href='#'>
            Sign up for free
          </Button>
          <Button
            color='link-color'
            size='lg'
            className='md:ml-auto'
            href='#'
            iconLeading={PlayCircle}>
            Watch demo
          </Button>
          <Button
            color='link-color'
            size='lg'
            href='#'
            iconLeading={MessageChatCircle}>
            Chat to sales
          </Button>
        </div>
      </div>
    </nav>
  );
};

export const DropdownMenuFeatureCard = ({ prefix }: { prefix: string }) => {
  const head = useTranslations('headers');
  const btn = useTranslations('buttons');

  return (
    <div className='px-3 pb-2 md:max-w-[640px] md:p-0'>
      <nav className='flex flex-col overflow-hidden rounded-xl bg-primary shadow-xs ring-1 ring-border-secondary md:w-max md:flex-row md:rounded-2xl md:shadow-lg'>
        <ul className='flex flex-1 flex-col gap-0.5 pb-3 pt-2 md:p-2'>
          {megaMenuItems[2].items
            .slice(0, 4)
            .map(({ title, subtitle, href, Icon, badge }) => (
              <li key={title + href}>
                <NavMenuItemLink
                  icon={Icon}
                  title={head(prefix + '.' + title)}
                  subtitle={head(prefix + '.' + subtitle)}
                  badge={badge}
                  href={href}
                />
              </li>
            ))}
        </ul>
        <div className='bg-secondary px-1 pb-3 pt-2 md:max-w-[304px] md:px-2'>
          <FeatureCardVertical
            imgSrc='/marketing/smiling-girl.png'
            title={head(prefix + '.video_title')}
            description={head(prefix + '.video_desc')}
            actionsContent={
              <div className='inline-flex gap-3'>
                <Button
                  color='link-gray'
                  size='sm'
                  href='#'>
                  {btn('dismiss')}
                </Button>
                <Button
                  color='link-color'
                  size='sm'
                  href='#'>
                  {btn('changelog')}
                </Button>
              </div>
            }
          />
        </div>
      </nav>
    </div>
  );
};

export const DropdownMenuWithTwoColsAndLinksAndFooter = ({
  prefix,
}: {
  prefix: string;
}) => {
  const head = useTranslations('headers');
  const btn = useTranslations('buttons');

  return (
    <div className='px-3 pb-2 md:max-w-[800px] md:p-0'>
      <nav className='overflow-hidden rounded-xl bg-secondary shadow-xs ring-1 ring-inset ring-border-secondary md:rounded-2xl md:shadow-lg'>
        <div className='flex flex-col gap-5 rounded-xl bg-primary pb-5 pt-4 ring-1 ring-inset ring-border-secondary md:gap-6 md:rounded-t-2xl md:p-6 md:pt-5'>
          <div className='flex flex-col gap-1 px-4 md:p-0'>
            <p className='text-primary tt-md-semi'>{head(prefix + '.title')}</p>
            <p className='text-tertiary tt-sm'>{head(prefix + '.desc')}</p>
          </div>

          <div className='flex flex-col gap-5 md:flex-row md:gap-8 md:py-0'>
            <div className='-mb-px flex flex-col gap-4 border-b border-b-secondary px-4 pb-5 md:mb-0 md:gap-5 md:border-none md:p-0'>
              <h3 className='text-brand-tertiary tt-sm-semi'>
                {btn('getting_started')}
              </h3>
              <ul className='flex flex-col gap-3'>
                {[
                  { title: 'setup_101', href: '#' },
                  { title: 'adding_users', href: '#' },
                  { title: 'video_tutorials', href: '#' },
                  { title: 'libraries_and_sdks', href: '#' },
                  { title: 'adding_plugins', href: '#' },
                  { title: 'dashboard_templates', href: '#' },
                ].map((item) => (
                  <li>
                    <Button
                      href={item.href}
                      color='link-gray'
                      size='lg'>
                      {btn(item.title)}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-2'>
              {megaMenuItems.slice(1, 3).map((nav) => (
                <div key={nav.title}>
                  <h3 className='mb-2 px-4 text-brand-tertiary tt-sm-semi md:px-0'>
                    {head(prefix + '.' + nav.title)}
                  </h3>
                  <ul className='flex flex-col gap-0.5'>
                    {nav.items
                      .slice(0, 3)
                      .map(({ title, subtitle, href, Icon, badge }) => (
                        <li key={title}>
                          <NavMenuItemLink
                            icon={Icon}
                            title={head(prefix + '.' + title)}
                            subtitle={head(prefix + '.' + subtitle)}
                            badge={badge}
                            href={href}
                          />
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='mx-auto flex max-w-container flex-col px-4 py-5 md:flex-row md:items-center md:justify-between md:px-6'>
          <Button
            href='#'
            color='secondary-gray'
            size='md'
            iconLeading={BookOpen01}
            className='hidden md:flex'>
            {btn('documentation')}
          </Button>
          <Button
            href='#'
            color='primary'
            size='md'
            className='hidden md:flex'>
            {btn('view_all_resources')}
          </Button>
          <Button
            href='#'
            color='primary'
            size='sm'
            className='md:hidden'>
            {btn('view_all_resources')}
          </Button>
        </div>
      </nav>
    </div>
  );
};

export const DropdownMenuFeaturedPosts = () => {
  return (
    <div className='px-3 pb-2 md:max-w-[768px] md:p-0'>
      <nav className='md:w-max-full flex flex-col overflow-hidden rounded-xl bg-primary shadow-xs ring-1 ring-border-secondary md:flex-row md:rounded-2xl md:shadow-lg'>
        <div className='flex flex-1 flex-col gap-3 pb-5 pt-4 md:p-5'>
          <h3 className='px-4 text-brand-tertiary tt-sm-semi md:px-0'>
            {megaMenuItems[2].title}
          </h3>
          <ul className='flex flex-col gap-0.5'>
            {megaMenuItems[2].items
              .slice(0, 4)
              .map(({ title, subtitle, href, Icon, badge }) => (
                <li key={title}>
                  <NavMenuItemLink
                    icon={Icon}
                    title={title}
                    subtitle={subtitle}
                    badge={badge}
                    href={href}
                  />
                </li>
              ))}
          </ul>
        </div>

        <div className='shrink-0 bg-secondary py-5 leading-none md:max-w-[448px] md:p-5 md:pb-6'>
          <h3 className='mb-3 px-4 text-brand-tertiary tt-sm-semi md:px-0'>
            Latest blog posts
          </h3>

          <ul className='flex flex-col gap-1 md:gap-0.5'>
            {articles.slice(0, 3).map((article) => (
              <li key={article.title}>
                <ImageCardHorizontal
                  imgSrc={article.imgSrc}
                  title={article.title}
                  subtitle={article.subtitle}
                />
              </li>
            ))}
          </ul>

          <div className='mt-3 px-4 md:mt-4 md:px-0'>
            <Button
              color='link-color'
              size='md'
              href='#'
              iconTrailing={ArrowRight}>
              All blog posts
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};
