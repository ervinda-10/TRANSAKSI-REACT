import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './home'
import Login from './login'
import Pegawai from './pegawai'
import Register from './register'
import Siswa from './siswa2'
import Pelanggaran from './pelanggaran'
import Jurusan from './jurusan'
import PelanggaranSiswa from './pelanggaran_siswa'

const Pages = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/pegawai' component={Pegawai} />
        <Route path='/register' component={Register} />
        <Route path='/siswa' component={Siswa} />
        <Route path='/pelanggaran' component={Pelanggaran} />
        <Route path='/jurusan' component={Jurusan} />
        {/* <Route path='/pelanggaran' component={Pelanggaran} /> */}
        <Route path='/pelanggaran_siswa' component={PelanggaranSiswa} />
    </Switch>
)

export default Pages

