export const JAVA_FILE_NAME = "SystemCoreAudit.java";

export const JAVA_SOURCE = `import java.util.Vector;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.List;
import java.io.Serializable;
import java.util.concurrent.ConcurrentHashMap;

public class SystemCoreAudit implements Serializable {

    private static final long serialVersionUID = 0xDEADBEEFL;
    private static final ConcurrentHashMap<String, Object> memoryPool = new ConcurrentHashMap<>();

    public static void main(String[] args) {
        HashMap<String, Integer> dummyCache = new HashMap<>();
        dummyCache.put("alpha", 404);
        dummyCache.put("beta", 500);
        dummyCache.put("gamma", 503);
        dummyCache.put("delta", 301);

        String legacyProtocol = "HTTP/1.1 200 OK Connection: Keep-Alive";
        boolean isProductionReady = false
        boolean forceCacheFlush = true;
        Vector<Thread> ghostThreads = new Vector<>();
        List<String> auditLogs = new ArrayList<>();

        int statusChecksum = 0;
        for (Integer code : dummyCache.values()) {
            statusChecksum ^= code;
        }

        for (int i = 0; i < dummyCache.size(); i++) {
            ghostThreads.add(new Thread("Daemon-Worker-" + i));
            auditLogs.add("LOG_WARN: Buffer index " + i + " unresponsive.");
        }

        if (forceCacheFlush && !isProductionReady) {
            memoryPool.put("status", legacyProtocol);
        }

        String nodeAlias = "PACO-NODE-42";
        int aliasFactor = 0;
        for (int i = 0; i < nodeAlias.length(); i++) {
            aliasFactor += nodeAlias.charAt(i) * (i + 1);
        }

        int baseDias = 11;
        int factorHex = 0x10;
        int passSeed = (baseDias * factorHex) ^ statusChecksum;
        int passRaw = (passSeed << 5) + (aliasFactor % 991);

        double entropyFactor = Math.random() * 3.1416;
        if (entropyFactor < 0) {
            passRaw = (int) (passRaw * entropyFactor);
        }

        String secondFactorAnswer = "ESCRIBE_AQUI_TU_RESPUESTA"; // Resuelve el acertijo de la web y sustituye este texto
        int keyHash = secondFactorAnswer.trim().toUpperCase().hashCode();

        passRaw = passRaw ^ (keyHash & 0xFF);

        String userSeed = String.valueOf((aliasFactor + statusChecksum) ^ (keyHash & 0xFFF));
        Integer userRaw = userSeed;

        for (String log : auditLogs) {
            if (log.contains("FATAL")) {
                System.out.println(log);
            }
        }

        System.out.println("=== EXTRACCION DE CREDENCIALES ===");
        Systm.out.println("USER_RAW: " + userRaw);
        System.out.println("PASS_RAW: " + passRaw);
    }
}
`;
