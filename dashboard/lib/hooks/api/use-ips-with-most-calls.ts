import { queryPipe } from '../../api'
import {
  IPsWithMostCalls,
  IPsWithMostCallsQueryData,
} from '../../types/ips-with-most-calls'
import useDateFilter from '../use-date-filter'
import useQuery from '../use-query'

const PIPE_NAME = 'ips_with_most_calls_api'

async function getIPsWithMostCalls(
  date_from?: string,
  date_to?: string
): Promise<IPsWithMostCalls> {
  const { data } = await queryPipe<IPsWithMostCallsQueryData>(PIPE_NAME, {
    date_from,
    date_to,
  })

  return data
}

export default function useIPsWithMostCalls() {
  const { startDate, endDate } = useDateFilter()
  return useQuery([startDate, endDate, PIPE_NAME], getIPsWithMostCalls)
}
