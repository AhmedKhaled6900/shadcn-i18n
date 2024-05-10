
interface ServicesPageprops {
    params: {
      lng: string
    }}
export default function ServicesPage({ params: { lng } } : ServicesPageprops) {
    return (
        <div>
            <h1>{lng}</h1>
        </div>
    )
}