import { MdDashboardCustomize } from 'react-icons/md';
const DashboardHeader = props => {
  const { subtitle } = props;
  return (
    <div className='hidden md:flex w-full items-center gap-2 mx-auto text-accent rounded-md py-4 bg-white'>
      <MdDashboardCustomize size='1.9rem' />
      <h3 className='text-3xl font-main-font'>Dashboard</h3>
      <span>-</span>
      <small className='font-bold text-gray-dark text-lg'>{subtitle}</small>
    </div>
  );
};
export default DashboardHeader;
