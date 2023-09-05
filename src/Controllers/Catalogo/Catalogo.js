import React, { useEffect, useState } from 'react'
import CatalogoComponent from '../../Components/Catalogo/Catalogo'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useSelector } from 'react-redux'
import BarCodeScanned from '../../Components/BarCodeScanned/Index';
import axios from 'axios';
const Catalogo = ({ navigation, route }) => {
  const [search, setSearch] = useState("")
  const [products, setProducts] = useState([])
  
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [activeScanned, setActiveScanned] = useState(false)

  const [steps, setSteps] = useState(0);
  const [controller, setController] = useState(new AbortController());
  const [isLoading, setIsLoading] = useState(false);

  // const { id } = route.params;
  const [file, setFile] = useState(null);
  const [Cat, setCat] = useState([])
  const hash = useSelector(state => state.SessionHash)
  const Added = useSelector(state => state.Added)
  const [page, setPage]=useState(1)

  let timeoutId = null;

  /*
  useEffect(() => {
    fetch(`https://api.popeyemayorista.com.ar/backend/public/api/Auth/Catalogo`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + hash,
        },
      }).then(async (res) => {
         const jsonRes = await res.json();
         setFile(jsonRes.data[0]);
         console.log(jsonRes)
      })
   
}, [hash])
*/

  useEffect(() => {
    fetch(`https://api.popeyemayorista.com.ar/backend/public/api/Auth/Rubros`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + hash,
      },
    }).then(async (res) => {
      const jsonRes = await res.json();
      setCat(jsonRes);
      console.log(jsonRes)
    })

  }, [hash])

  useEffect(() => {
      const fetch = async () => {
        if(!isLoading){
          setProducts([])
          setIsLoading(true);
  
          let params = {
            pagination: 10,
            search: search,
            page: page
          }
  
          const response = await axios.get(`https://api.popeyemayorista.com.ar/backend/public/api/Auth/Productos`, {
            params, 
            signal: controller.signal, 
            headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + hash,
          }
        })
          .then((res) => {
            setController(new AbortController());
            setIsLoading(false);
            const jsonRes = res;
            setProducts(jsonRes.data.data);
          })
          .catch((result) => {
            setIsLoading(false);
            setController(new AbortController());
  
            if (result.code == "ERR_CANCELED") {
              if(timeoutId){
                clearTimeout(timeoutId);
              }

              timeoutId = setTimeout(() => {
                setSteps(steps + 1);
              }, 300);
            }
    
          })
        }else {
          if (controller) {
            console.log("cancel");
            controller.abort();
          }
        }
      }
      
      
      fetch()
  }, [search, steps, page])

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);


  if(activeScanned){
    return (
      <BarCodeScanned 
      //Code scanner
      hasPermission={hasPermission}
      scanned={scanned}
      setScanned={setScanned}
      search={search}
      setSearch={setSearch}
      setActiveScanned={setActiveScanned}
      navigation={navigation}
      hash={hash}
      />
    )
  }

  return (
    <CatalogoComponent search={search}
      navigation={navigation}
      setSearch={setSearch}
      setActiveScanned={setActiveScanned}
      setProducts={setProducts}
      products={products}
      Cat={Cat}
      Added={Added}
      file={file}
      hash={hash}
      setPage={setPage}
      page={page}
    />
  )
}

export default Catalogo