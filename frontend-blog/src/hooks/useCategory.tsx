import {  useMutation } from '@tanstack/react-query'
import axios from "axios"
const useCategory = () => {
    // Mutations
   return useMutation({
    mutationFn: async () =>  await axios.get('http://localhost:5000/api/category'),
    onSuccess: (data) => {
      console.log('Category added successfully:', data)
    },
    onError: (error) => {
      console.error('Error adding category:', error)
    }
   })

}

export default useCategory