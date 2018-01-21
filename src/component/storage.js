import { h } from 'preact'
import Tip from './tip'
import { toGiga } from '../util'
const StorageComponent = ({ storage }) => (
  <div>
    <h2>Storage</h2>
    {storage.map(({ name, capacity, id }) => (
      <Tip key={id}>{`${name || 'Unknown'} / ${toGiga(capacity)}GB`}</Tip>
    ))}
  </div>
)
export default StorageComponent