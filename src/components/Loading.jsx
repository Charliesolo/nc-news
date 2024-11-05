import {hourglass} from 'ldrs'

function Loading() {
    hourglass.register()

  return (
    <div>
        <p>Loading</p>
        <l-hourglass/>
    </div>
  )
}

export default Loading