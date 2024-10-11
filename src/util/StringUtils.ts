export class StringUtils {
    public static capitalize(input: String): String {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
}
