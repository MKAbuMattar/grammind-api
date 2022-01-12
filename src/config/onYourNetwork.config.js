import { networkInterfaces } from 'os'

export const endPoints = {}

const nets = networkInterfaces()

for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    if (net.family === 'IPv4' && !net.internal) {
      if (!endPoints[name]) {
        endPoints[name] = []
      }
      endPoints[name].push(net.address)
    }
  }
}

export default endPoints
