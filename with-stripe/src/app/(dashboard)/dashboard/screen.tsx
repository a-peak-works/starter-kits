'use client';

import { MetricsChart04 } from '@/components/application/metrics/metrics';
import { PaginationCardMinimal } from '@/components/application/pagination/pagination';
import { ProgressBar } from '@/components/application/progress-indicators/progress-indicators';
import { Table, TableCard } from '@/components/application/tables/Table';
import Button from '@/components/shared/buttons/button';
import {
  BadgeWithButton,
  BadgeWithDot,
} from '@/components/shared/badges/badges';

import { Tooltip } from '@/components/shared/tooltips/tooltips';
import {
  BarChartSquare02,
  CheckDone01,
  Edit01,
  FilterLines,
  HomeLine,
  PieChart03,
  Plus,
  Rows01,
  SearchLg,
  Trash01,
  UploadCloud02,
  Users01,
  XClose,
} from '@a-peak-works/untitledui-icons';
import { useState } from 'react';
import { SortDescriptor } from 'react-aria-components';
import { SidebarNavigationDualTier } from '@/components/application/app-navigation/sidebar-navigation';
import { Avatar } from '@/components/shared/avatar/avatar';
import { FeaturedCardQRCode } from '@/components/application/app-navigation/base-components/featured-card';
import { InputDropdown } from '@/components/shared/input-dropdown/input-dropdown';
import { ElementsProvider } from '@/components/shared/inputs/stripe/elements-provider';
import { PaymentDetails } from '@/components/application/modals/modals';

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: 'company',
    direction: 'ascending',
  });
  const customers = [
    {
      id: 1,
      company: {
        name: 'Ephemeral',
        website: 'ephemeral.io',
        imageUrl: '/logos/images/Ephemeral.jpg',
      },
      about: {
        title: 'Content curating app',
        description: 'Brings all your news into one place',
      },
      license_use: 70,
      status: 'customer',
    },
    {
      id: 2,
      company: {
        name: 'Stack3d Lab',
        website: 'stack3dlab.com',
        imageUrl: '/logos/images/Stack3d Lab.jpg',
      },
      about: {
        title: 'Design software',
        description: 'Super lightweight design app',
      },
      license_use: 60,
      status: 'churned',
    },
    {
      id: 3,
      company: {
        name: 'Warpspeed',
        website: 'getwarpspeed.com',
        imageUrl: '/logos/images/Warpspeed.jpg',
      },
      about: {
        title: 'Data prediction',
        description: 'AI and machine learning data',
      },
      license_use: 30,
      status: 'customer',
    },
    {
      id: 4,
      company: {
        name: 'CloudWatch',
        website: 'cloudwatch.app',
        imageUrl: '/logos/images/CloudWatch.jpg',
      },
      about: {
        title: 'Productivity app',
        description: 'Time management and productivity',
      },
      license_use: 80,
      status: 'customer',
    },
    {
      id: 5,
      company: {
        name: 'ContrastAI',
        website: 'contrastai.com',
        imageUrl: '/logos/images/ContrastAI.jpg',
      },
      about: {
        title: 'Web app integrations',
        description: 'Connect web apps seamlessly',
      },
      license_use: 20,
      status: 'churned',
    },
    {
      id: 6,
      company: {
        name: 'Convergence',
        website: 'convergence.io',
        imageUrl: '/logos/images/Convergence.jpg',
      },
      about: {
        title: 'Sales CRM',
        description: 'Web-based sales doc management',
      },
      license_use: 10,
      status: 'customer',
    },
    {
      id: 7,
      company: {
        name: 'Sisyphus',
        website: 'sisyphus.com',
        imageUrl: '/logos/images/Sisyphus.jpg',
      },
      about: {
        title: 'Automation and workflow',
        description: 'Time tracking, invoicing and expenses',
      },
      license_use: 40,
      status: 'customer',
    },
  ];

  return (
    <div className='flex flex-col bg-primary lg:flex-row'>
      <SidebarNavigationDualTier
        hideBorder
        activeUrl='/dashboard'
        items={[
          {
            label: 'Home',
            href: '/',
            icon: HomeLine,
          },
          {
            label: 'Dashboard',
            href: '/dashboard',
            icon: BarChartSquare02,
          },
          {
            label: 'Projects',
            href: '/projects',
            icon: Rows01,
          },
          {
            label: 'Tasks',
            href: '/tasks',
            icon: CheckDone01,
            badge: 8,
          },
          {
            label: 'Reporting',
            href: '/reporting',
            icon: PieChart03,
          },
          {
            label: 'Users',
            href: '/users',
            icon: Users01,
          },
        ]}
        featureCard={
          <FeaturedCardQRCode
            title='Verify this device'
            description='Open the app and scan the QR code below to verify this device.'
            confirmLabel='Verify another way'
            onConfirm={() => {}}
            onDismiss={() => {}}
          />
        }
      />
      <main className='min-w-0 flex-1 lg:pt-2'>
        <div className='relative flex h-full flex-col gap-8 border-secondary pb-12 pt-8 shadow-xs lg:rounded-tl-[40px] lg:border-l lg:border-t'>
          <div className='flex flex-col justify-between gap-4 px-4 lg:flex-row lg:px-8'>
            <div className='flex flex-col gap-0.5 lg:gap-1'>
              <p className='text-primary tt-xl-semi lg:td-xs-semi'>
                Welcome back, Olivia
              </p>
              <p className='text-tertiary tt-md'>
                Track, manage and forecast your customers and orders.
              </p>
            </div>
            <div className='flex gap-3'>
              <Button
                size='md'
                color='secondary-gray'
                iconLeading={UploadCloud02}>
                Import
              </Button>
              <Button
                size='md'
                iconLeading={Plus}
                onClick={() => setIsOpen(true)}>
                Add
              </Button>
            </div>
          </div>
          <ElementsProvider>
            <PaymentDetails
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </ElementsProvider>
          <div className='grid grid-cols-1 gap-5 px-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:px-8'>
            <MetricsChart04
              title='2,420'
              subtitle='Total customers'
              change='6.0%'
              type='simple'
              changeTrend='positive'
              chartColor='text-fg-brand-secondary'
              chartAreaFill='none'
              chartData={[
                { value: 5 },
                { value: 4 },
                { value: 8 },
                { value: 6 },
                { value: 8 },
                { value: 5 },
                { value: 12 },
              ]}
            />
            <MetricsChart04
              title='1,210'
              subtitle='Members'
              change='10%'
              type='trend'
              chartCurveType='linear'
              changeTrend='negative'
              chartColor='text-fg-error-secondary'
              chartData={[
                { value: 22 },
                { value: 19 },
                { value: 22 },
                { value: 20 },
                { value: 19 },
                { value: 16 },
                { value: 18 },
                { value: 17 },
                { value: 16 },
                { value: 11 },
                { value: 10 },
                { value: 8 },
              ]}
            />
            <MetricsChart04
              title='316'
              subtitle='Active now'
              change='6.0%'
              type='simple'
              chartCurveType='linear'
              changeTrend='positive'
              chartColor='text-fg-success-secondary'
              chartData={[
                { value: 5 },
                { value: 9 },
                { value: 7 },
                { value: 8 },
                { value: 9 },
                { value: 10 },
                { value: 13 },
                { value: 9 },
                { value: 10 },
                { value: 11 },
                { value: 13 },
                { value: 9 },
                { value: 11 },
                { value: 10 },
                { value: 8 },
                { value: 17 },
                { value: 16 },
                { value: 19 },
                { value: 22 },
                { value: 18 },
                { value: 17 },
                { value: 16 },
                { value: 17 },
                { value: 19 },
                { value: 15 },
                { value: 16 },
                { value: 15 },
                { value: 17 },
              ]}
            />
          </div>

          <div className='flex w-full flex-col gap-6 px-4 lg:px-8'>
            <div className='hidden justify-between gap-4 lg:flex'>
              <div className='flex gap-3'>
                <Button
                  iconTrailing={XClose}
                  size='md'
                  color='secondary-gray'>
                  All time
                </Button>
                <Button
                  iconTrailing={XClose}
                  size='md'
                  color='secondary-gray'>
                  US, AU, +4
                </Button>
                <Button
                  iconLeading={FilterLines}
                  size='md'
                  color='secondary-gray'>
                  More filters
                </Button>
              </div>
              {/* <Input
                icon={SearchLg}
                shortcut
                placeholder='Search'
                size='sm'
                className='w-[320px]'
              /> */}
              <InputDropdown
                placeholderIcon={SearchLg}
                placeholder='Search'
                size='sm'
                className='w-[320px]'>
                <InputDropdown.ListBoxItem
                  item={{
                    label: 'All',
                    value: 'all',
                  }}
                />
              </InputDropdown>
            </div>
            <div className='flex flex-col gap-3 lg:hidden'>
              {/* <Input
                icon={SearchLg}
                shortcut
                placeholder='Search'
                size='sm'
              /> */}

              <InputDropdown
                placeholderIcon={SearchLg}
                placeholder='Search'
                size='sm'>
                <InputDropdown.ListBoxItem
                  item={{
                    label: 'All',
                    value: 'all',
                  }}
                />
              </InputDropdown>
              <Button
                iconLeading={FilterLines}
                size='md'
                color='secondary-gray'>
                More filters
              </Button>
              <div className='flex gap-3'>
                <BadgeWithButton
                  color='gray'
                  size='md'
                  type='modern'>
                  All time
                </BadgeWithButton>
                <BadgeWithButton
                  color='gray'
                  size='md'
                  type='modern'>
                  US, AU, +4
                </BadgeWithButton>
              </div>
            </div>

            <TableCard.Root className='-mx-4 rounded-none lg:mx-0 lg:rounded-xl'>
              <Table
                aria-label='Trades'
                selectionMode='multiple'
                defaultSelectedKeys={[1, 2, 3, 6, 7]}
                sortDescriptor={sortDescriptor}
                onSortChange={setSortDescriptor}>
                <Table.Header className='bg-primary'>
                  <Table.Head
                    id='company'
                    isRowHeader
                    allowsSorting
                    label='Company'
                    className='w-full'
                  />
                  <Table.Head
                    id='license_use'
                    label='License use'
                    className='lg:min-w-[136px]'
                  />
                  <Table.Head
                    id='status'
                    label='Status'
                  />
                  <Table.Head
                    id='users'
                    label='Users'
                    allowsSorting
                  />
                  <Table.Head
                    id='about'
                    label='About'
                  />
                  <Table.Head id='actions' />
                </Table.Header>
                <Table.Body items={customers}>
                  {(customer) => (
                    <Table.Row
                      id={customer.id}
                      highlightSelectedRow={false}>
                      <Table.Cell className='lg:px-2'>
                        <div className='group flex items-center gap-3'>
                          <Avatar
                            src={customer.company.imageUrl}
                            alt={customer.company.name}
                            size='md'
                          />
                          <div>
                            <p className='text-primary tt-sm-md'>
                              {customer.company.name}
                            </p>
                            <p className='text-tertiary tt-sm'>
                              {customer.company.website}
                            </p>
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        <ProgressBar
                          min={0}
                          max={100}
                          value={customer.license_use}
                        />
                      </Table.Cell>
                      <Table.Cell>
                        <BadgeWithDot
                          size='sm'
                          type='modern'
                          color={
                            customer.status === 'customer' ? 'success' : 'gray'
                          }
                          className='capitalize'>
                          {customer.status}
                        </BadgeWithDot>
                      </Table.Cell>
                      <Table.Cell>
                        <div className='flex -space-x-1'>
                          <Avatar
                            className='ring-[1.5px] ring-bg-primary'
                            size='xs'
                            src='/avatars/Olivia Rhye.jpg'
                            alt='Olivia Rhye'
                          />
                          <Avatar
                            className='ring-[1.5px] ring-bg-primary'
                            size='xs'
                            src='/avatars/Phoenix Baker.jpg'
                            alt='Phoenix Baker'
                          />
                          <Avatar
                            className='ring-[1.5px] ring-bg-primary'
                            size='xs'
                            src='/avatars/Lana Steiner.jpg'
                            alt='Lana Steiner'
                          />
                          <Avatar
                            className='ring-[1.5px] ring-bg-primary'
                            size='xs'
                            src='/avatars/Demi Wilkinson.jpg'
                            alt='Demi Wilkinson'
                          />

                          <Avatar
                            className='ring-[1.5px] ring-bg-primary'
                            size='xs'
                            src='/avatars/Candice Wu.jpg'
                            alt='Candice Wu'
                          />
                          <Avatar
                            size='xs'
                            className='ring-[1.5px] ring-bg-primary'
                            placeholder={
                              <span className='flex items-center justify-center text-tertiary tt-xs-semi'>
                                +5
                              </span>
                            }
                          />
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        <div>
                          <p className='text-primary tt-sm-md'>
                            {customer.about.title}
                          </p>
                          <p className='text-nowrap text-tertiary tt-sm'>
                            {customer.about.description}
                          </p>
                        </div>
                      </Table.Cell>

                      <Table.Cell className='px-4'>
                        <div className='flex justify-end gap-0.5'>
                          <Tooltip
                            title='Delete'
                            arrow={false}>
                            <Button
                              size='sm'
                              color='tertiary-gray'
                              iconLeading={
                                <Trash01 className='size-4 text-fg-quinary transition-inherit-all group-hover:text-fg-quinary_hover' />
                              }
                            />
                          </Tooltip>
                          <Tooltip
                            title='Edit'
                            arrow={false}>
                            <Button
                              size='sm'
                              color='tertiary-gray'
                              iconLeading={
                                <Edit01 className='size-4 text-fg-quinary transition-inherit-all group-hover:text-fg-quinary_hover' />
                              }
                            />
                          </Tooltip>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  )}
                </Table.Body>
              </Table>
              <PaginationCardMinimal
                page={1}
                total={10}
                align='left'
              />
            </TableCard.Root>
          </div>
        </div>
      </main>
    </div>
  );
};
