import { useRouter } from "next/router"
import Link from "next/link"

const PaginationButtons = () => {
    const router = useRouter()
    const startIndex = Number(router.query.start) || 0
    return <div></div>
}

export default PaginationButtons
