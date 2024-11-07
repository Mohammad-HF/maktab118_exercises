import { fetchProducts } from "@/apis/products.api"
import { QueryClient } from "@tanstack/react-query"
import { cache } from "react"

const getQueryClient = cache(() => new QueryClient().fetchQuery({queryKey : ["products"],queryFn : fetchProducts}))
export default getQueryClient