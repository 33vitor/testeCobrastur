import React, { useState } from 'react';
import {GET_LIST} from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import CellTableHome from './CellTableHome';
import styles from './TableHome.module.css';
import icon from '../../Assets/client.svg'

const TableHome = ({page}) => {
  const {data, loading, error, request} = useFetch();


  React.useEffect(() =>{
    async function getList(){
      const {url, options} = GET_LIST({page});
      const {response, json} = await request(url, options);
    }
    getList();
  }, [request, page])
  if(error) return <Error error={error} />
  if(loading) return <Loading />
  if(data){
  let info = data.data;
  return (
    <section className="animeLeft">
      <div className={styles.boxTitle}>
        <img src={icon} className={styles.iconTitle}/>
        <h3 className={styles.title} >Painel de Clientes</h3>
      </div>
      <br/>
      <div className={styles.data}>
        {info.map(info => <CellTableHome key={info.id} data={info}/>)}
      </div>
      <p>Total de Clientes: {data.total}</p>
      
    </section>
  )}
  else return null;
}

export default TableHome
