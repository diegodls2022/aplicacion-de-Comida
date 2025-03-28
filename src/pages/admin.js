import axios from 'axios'
import useSWR from 'swr'
import AdminLayout from '../../layout/AdminLayout'
import Orden from '../../components/Orden'

export default function Admin() {

    const fetcher = () => axios('/api/ordenes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {refreshInterval: 100})

   // console.log(data)
   // console.log(error)
   // console.log(isLoading)


    return (
        <AdminLayout pagina={'admin'}>
             <h1 className="text-4xl font-black">Panel de Administración</h1>
            <p className="text-2xl my-10">Administra tus ordenes</p>

           {data && data.length ? data.map(orden =>
                <Orden 
                    key={orden.id}
                    orden={orden}
                />
           ) : <p>¡¡¡ No hay ordenes pendientes !!!</p> } 
        </AdminLayout>
    )
}