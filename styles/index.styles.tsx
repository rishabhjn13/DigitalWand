import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },

  // Permission screen
  permissionScreen: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    gap: 14,
  },
  permissionIconWrap: {
    width: 90,
    height: 90,
    borderRadius: 24,
    backgroundColor: "#1a1a1a",
    borderWidth: 1,
    borderColor: "#2a2a2a",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  permissionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  permissionSub: {
    color: "#555",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  permissionBtn: {
    marginTop: 8,
    backgroundColor: "#F5E642",
    paddingVertical: 13,
    paddingHorizontal: 32,
    borderRadius: 14,
  },
  permissionBtnText: {
    color: "#111",
    fontSize: 14,
    fontWeight: "700",
  },
  openSettingsText: {
    color: "#555",
    fontSize: 13,
    marginTop: 4,
  },

  // Status bar

  // Navbar
  navbar: {
    height: 56,
    backgroundColor: "#111",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#1a1a1a",
  },
  navLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  navLogo: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },
  navTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  navRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  navBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#222",
  },
  navBtnActive: {
    backgroundColor: "#1e1c00",
    borderColor: "#F5E642",
  },

  // Camera window
  cameraWindow: {
    flex: 1,
    margin: 16,
    marginBottom: 0,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#1a1a1a",
    borderWidth: 1,
    borderColor: "#222",
  },

  // Corners
  corner: {
    position: "absolute",
    width: 22,
    height: 22,
  },
  cornerTL: {
    top: 20, left: 20,
    borderTopWidth: 2, borderLeftWidth: 2,
    borderColor: "#F5E642",
    borderTopLeftRadius: 3,
  },
  cornerTR: {
    top: 20, right: 20,
    borderTopWidth: 2, borderRightWidth: 2,
    borderColor: "#F5E642",
    borderTopRightRadius: 3,
  },
  cornerBL: {
    bottom: 20, left: 20,
    borderBottomWidth: 2, borderLeftWidth: 2,
    borderColor: "#F5E642",
    borderBottomLeftRadius: 3,
  },
  cornerBR: {
    bottom: 20, right: 20,
    borderBottomWidth: 2, borderRightWidth: 2,
    borderColor: "#F5E642",
    borderBottomRightRadius: 3,
  },

  // Focus ring
  focusRing: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 64,
    height: 64,
    marginTop: -32,
    marginLeft: -32,
    borderRadius: 32,
    borderWidth: 1.5,
    borderColor: "rgba(245,230,66,0.7)",
  },

  // Grid
  gridOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  gridLineV: {
    position: "absolute",
    top: 0, bottom: 0,
    width: 1,
    backgroundColor: "rgba(255,255,255,0.06)",
  },
  gridLineH: {
    position: "absolute",
    left: 0, right: 0,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.06)",
  },

  // Live badge
  liveBadge: {
    position: "absolute",
    top: 16, right: 16,
    backgroundColor: "rgba(255,40,40,0.9)",
    borderRadius: 6,
    paddingVertical: 3,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  liveDot: {
    width: 7, height: 7,
    borderRadius: 3.5,
    backgroundColor: "#fff",
  },
  liveText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.5,
  },

  // Camera off
  cameraOff: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#141414",
    gap: 8,
  },
  offIconWrap: {
    width: 72, height: 72,
    borderRadius: 20,
    backgroundColor: "#1e1e1e",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#2a2a2a",
    marginBottom: 8,
  },
  offText: {
    color: "#555",
    fontSize: 16,
    fontWeight: "700",
  },
  offSub: {
    color: "#383838",
    fontSize: 12,
  },

  // Mode pills
  modeRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  modePill: {
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: "#1a1a1a",
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },
  modePillActive: {
    backgroundColor: "#1e1c00",
    borderColor: "#F5E642",
  },
  modePillText: {
    color: "#555",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
  modePillTextActive: {
    color: "#F5E642",
  },

  // Capture row
  captureRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingTop: 20,
    paddingBottom: 4,
  },
  sideSlot: {
    width: 52, height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  captureBtn: {
    width: 76, height: 76,
    borderRadius: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  captureBtnOn: {
    backgroundColor: "#F5E642",
    shadowColor: "#F5E642",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 10,
  },
  captureBtnOff: {
    backgroundColor: "#2a2a2a",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 4,
  },
  captureBtnInner: {
    width: 30, height: 30,
    borderRadius: 15,
  },
  innerOn:  { backgroundColor: "#111" },
  innerOff: { backgroundColor: "#555" },
  smallBtn: {
    borderRadius: 14,
    backgroundColor: "#1a1a1a",
    borderWidth: 1,
    borderColor: "#222",
  },

  // Hint
  shutterHint: {
    color: "#333",
    fontSize: 11,
    textAlign: "center",
    paddingBottom: 8,
    letterSpacing: 0.3,
  },

  // Bottom nav
  bottomNav: {
    height: 72,
    backgroundColor: "#111",
    borderTopWidth: 1,
    borderTopColor: "#1a1a1a",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 8,
  },
  bottomNavBtn: {
    alignItems: "center",
    gap: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 14,
  },
  bottomNavLabel: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.5,
    color: "#666",
  },
  bottomNavLabelActive: {
    color: "#F5E642",
  },
  bottomNavDot: {
    position: "absolute",
    bottom: 2,
    width: 4, height: 4,
    borderRadius: 2,
    backgroundColor: "#F5E642",
  },
});