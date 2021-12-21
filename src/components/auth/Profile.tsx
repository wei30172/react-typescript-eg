export type ProfileProps = {
  name: string
}

const Profile = ({name}: ProfileProps) => {
  return <div>Private Profile compoment. Name is {name}</div>
}

export default Profile