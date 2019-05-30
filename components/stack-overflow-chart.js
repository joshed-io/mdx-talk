import { BarChart, Bar, Legend, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
  { name: '2017', percent: 33 },
  { name: '2018', percent: 56 },
  { name: '2019', percent: 65 },
];

const StackOverflowChart = () => (
  <BarChart width={800} height={300} data={data} css={{ fontSize: '30px', margin: '0 auto' }}>
    <CartesianGrid stroke="#fff" />
    <XAxis dataKey="name" />
    <YAxis />
    <Bar dataKey="percent" fill="#82ca9d" />
  </BarChart>
);

export default StackOverflowChart