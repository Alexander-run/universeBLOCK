export default function Login() {
    return (
        <div>
            <label for="username">角色名</label><input type="text" name="username" id="username" />
            <label for="password">暗号</label><input type="text" name="password" id="password" />
            <input type="submit" />
        </div>
    )
}