import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import UseAuth from '../../Hooks/UseAuth';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';

const PendingAddMoney = () => {
  const axiosPublic = UseAxiosPublic();
  const { user } = UseAuth(); // uncomment if you track auth
  const email = user?.email; // TEMP for demo

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        const { data } = await axiosPublic.get(`/add-money/${email}`);
        if (!ignore) setRequests(data);
      } catch (err) {
        console.error(err);
      } finally {
        if (!ignore) setLoading(false);
      }
    };
    fetchData();
    return () => (ignore = true);
  }, [axiosPublic, email]);

  return (
    <div className='pt-28 min-h-screen bg-primary-bg-image'>
      <Helmet>
        <title>semicolonff | My Add-Money Requests</title>
      </Helmet>

      <div className='max-w-3xl mx-auto bg-white p-4'>
        <h2 className='text-2xl font-bold mb-4'>My Add-Money Requests</h2>

        {loading ? (
          <p>Loading…</p>
        ) : requests.length === 0 ? (
          <p>No requests found.</p>
        ) : (
          <div className='overflow-x-auto'>
            <table className='min-w-full text-sm'>
              <thead>
                <tr className='bg-gray-100 text-left'>
                  <th className='py-2 px-3'>Date</th>
                  <th className='py-2 px-3'>Amount (৳)</th>
                  <th className='py-2 px-3'>Method</th>
                  <th className='py-2 px-3'>Trx ID</th>
                  <th className='py-2 px-3'>Status</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((r) => (
                  <tr
                    key={r._id}
                    className='border-b'>
                    <td className='py-2 px-3'>
                      {new Date(r.requestedAt).toLocaleString('en-BD')}
                    </td>
                    <td className='py-2 px-3'>{r.amount}</td>
                    <td className='py-2 px-3'>{r.method}</td>
                    <td className='py-2 px-3'>{r.trxId || '—'}</td>
                    <td className='py-2 px-3'>
                      {r.status === 'pending' && (
                        <span className='text-yellow-600'>Pending</span>
                      )}
                      {r.status === 'approved' && (
                        <span className='text-green-600'>Approved</span>
                      )}
                      {r.status === 'rejected' && (
                        <span className='text-red-600'>Rejected</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingAddMoney;
