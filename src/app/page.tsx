import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Dashboard from './dashboard/page';

export default function App() {
  return (
    <ChakraProvider>
    <div> Inside the App </div>
    {/* <Dashboard /> */}
  </ChakraProvider>
  );
}
 