import React from 'react'
import { Box } from 'grommet'
import { Logout, User } from 'grommet-icons'
import SettingsOption from '../components/SettingsOption'
import SettingsOptionProfile from '../components/SettingsOptionProfile'
import { signOut } from '../firebase/auth'

export const Settings = () => {
  return (
    <Box fill>
      <SettingsOptionProfile />
      <SettingsOption
        comingSoon
        handleClick={() => {}}
        icon={User}
        label="Setting 1"
      />
      <SettingsOption
        comingSoon
        handleClick={() => {}}
        icon={User}
        label="Setting 2"
      />
      <SettingsOption handleClick={signOut} icon={Logout} label="Sign out" />
    </Box>
  )
}

export default Settings
