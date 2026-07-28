package test

import (
	"fmt"
	"testing"
	"time"

	"github.com/gruntwork-io/terratest/modules/k8s"
	"github.com/gruntwork-io/terratest/modules/retry"
	"github.com/stretchr/testify/require"
)

func TestKindClusterIsRunning(t *testing.T) {
	t.Parallel()

	// Setup the Kubernetes options to use the local kind context
	options := k8s.NewKubectlOptions("kind-aleclabs-local", "", "default")

	// kind clusters often take several seconds to register their nodes with the API server.
	retry.DoWithRetry(t, "Wait for nodes to register", 30, 5*time.Second, func() (string, error) {
		nodes, err := k8s.GetNodesE(t, options)
		if err != nil {
			return "", err
		}
		if len(nodes) == 0 {
			return "", fmt.Errorf("no nodes found yet")
		}
		return "nodes found", nil
	})

	// Wait until the nodes are actually in a Ready state
	k8s.WaitUntilAllNodesReady(t, options, 30, 5*time.Second)

	// Final assertion
	nodes := k8s.GetNodes(t, options)
	require.NotEmpty(t, nodes, "No nodes found in the kind cluster")
}
